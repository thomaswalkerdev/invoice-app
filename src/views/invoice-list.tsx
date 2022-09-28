import { InvoiceHeader } from "../components/invoices/invoice-header.tsx";
import React from "react";
import { InvoiceEntry } from "../components/invoices/invoice-entry.tsx";

export function InvoiceList() {
  let invoiceList = ["invoice 1", "invoice2"];
  return (
    <>
      <InvoiceHeader />
      <div className="invoices__list-wrapper">
        {invoiceList.map((invoice) => {
          return <InvoiceEntry />;
        })}
      </div>
    </>
  );
}

export default InvoiceList;
