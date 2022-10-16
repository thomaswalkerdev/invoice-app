import { InvoiceHeader } from "../components/invoices/invoice-header";
import { InvoiceEntry } from "../components/invoices/invoice-entry";
import { useInvoice } from "../providers/invoice-provider";
import React from "react";

export function InvoiceList({ ...props }) {
  const { state, dispatch } = useInvoice();
  return (
    <>
      <InvoiceHeader />
      <div className="invoices__list-wrapper">
        {state.map((invoice, i) => {
          return (
            <div key={i}>
              <InvoiceEntry invoice={invoice} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default InvoiceList;
