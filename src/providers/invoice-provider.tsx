import * as React from "react";
import { InvoiceActions } from "../actions/invoice.actions";
import { Invoice } from "../models/invoice.model";

type Action = { type: InvoiceActions };
type Dispatch = (action: Action) => void;
type State = { count: number; invoices: Invoice[] };
type InvoiceProviderProps = { children: React.ReactNode };

const InvoiceContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function invoiceReducer(state: State, action: Action) {
  switch (action.type) {
    case InvoiceActions.CreateInvoice: {
      return { ...state, count: state.count + 1 };
    }
    case InvoiceActions.UpdateInvoice: {
      return { ...state, count: state.count - 1 };
    }
    case InvoiceActions.UpdateInvoiceStatus: {
      return { ...state, count: state.count - 1 };
    }
    case InvoiceActions.DeleteInvoice: {
      return { ...state, count: state.count - 1 };
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
