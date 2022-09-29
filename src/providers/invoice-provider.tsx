import React from "react";
import { InvoiceActions } from "../actions/invoice.actions";
import { Invoice } from "../models/invoice.model";
import { RemoveObjInArr, UpdateObjInArr } from "../utils/provider.utils";

type Action = { type: InvoiceActions; payload: any };
type Dispatch = (action: Action) => void;
type State = { count: number; invoices: Invoice[] };
type InvoiceProviderProps = { children: React.ReactNode };

const InvoiceContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function invoiceReducer(state: State, action: Action) {
  switch (action.type) {
    case InvoiceActions.CreateInvoice: {
      return { ...state, invoices: [...state.invoices, action.payload] };
    }
    case InvoiceActions.UpdateInvoice: {
      return {
        ...state,
        invoices: UpdateObjInArr(state.invoices, action.payload, "id"),
      };
    }
    case InvoiceActions.DeleteInvoice: {
      return {
        ...state,
        invoices: RemoveObjInArr(state.invoices, action.payload, "id"),
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function InvoiceProvider({ children }: InvoiceProviderProps) {
  const [state, dispatch] = React.useReducer(invoiceReducer, {
    count: 0,
    invoices: [],
  });
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

export { InvoiceProvider, useInvoice };
