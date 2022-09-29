import React from "react";
import { InvoiceHeader } from "../components/invoices/invoice-header";
import { InvoiceEntry } from "../components/invoices/invoice-entry";
import { useInvoice } from "../providers/invoice-provider";
import { InvoiceActions } from "../actions/invoice.actions";

export function InvoiceList({ ...props }) {
  let invoiceList = ["invoice 1", "invoice2"];
  const { state, dispatch } = useInvoice();
  return (
    <>
      <InvoiceHeader />
      <div className="invoices__list-wrapper">
        {invoiceList.map((invoice, i) => {
          return <InvoiceEntry key={i} />;
        })}
      </div>
    </>
  );
}

export default InvoiceList;
