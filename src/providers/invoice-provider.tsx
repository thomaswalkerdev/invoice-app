import React from "react";
import { InvoiceActions } from "../actions/invoice.actions";
import { Invoice } from "../models/invoice.model";
import { InvoiceService } from "../services/invoice.service";
import { RemoveObjInArr, UpdateObjInArr } from "../utils/provider.utils";
import {
  generateRandomUppercaseCharacters,
  generateRandomNumberString,
} from "../utils/random.utils";

type Action = { type: InvoiceActions; payload: any };
type Dispatch = (action: Action) => void;
type State = Invoice[];
type InvoiceProviderProps = { children: React.ReactNode };

const InvoiceContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function invoiceReducer(state: State, action: Action) {
  switch (action.type) {
    case InvoiceActions.CreateInvoice: {
      action.payload.id = generateId();
      return [...state, action.payload];
    }
    case InvoiceActions.UpdateInvoice: {
      console.log("action", action.payload);
      return UpdateObjInArr(state, action.payload, "id");
    }
    case InvoiceActions.DeleteInvoice: {
      return RemoveObjInArr(state, action.payload, "id");
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function InvoiceProvider({ children }: InvoiceProviderProps) {
  let invoiceService = new InvoiceService();
  const [state, dispatch] = React.useReducer(
    invoiceReducer,
    invoiceService.loadInvoices()
  );
  const value = { state, dispatch };
  return (
    <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>
  );
}

function useInvoice() {
  const context = React.useContext(InvoiceContext);
  if (context === undefined) {
    throw new Error("useInvoice must be used within a InvoiceProvider");
  }
  return context;
}

function generateId() {
  return generateRandomUppercaseCharacters(2) + generateRandomNumberString(4);
}

export { InvoiceProvider, useInvoice };
