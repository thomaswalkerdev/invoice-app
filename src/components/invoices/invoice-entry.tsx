import React from "react";
import { InvoiceStatus } from "./invoice-status";
export function InvoiceEntry() {
  return (
    <div className="invoices__list-entry">
      <span>Invoice Id</span>
      <span>Invoice Date</span>
      <span>Invoice Name</span>
      <span>Invoice Total</span>
      <InvoiceStatus />
      <span>Carret</span>
    </div>
  );
}
