import React, { useState } from "react";
import EditInvoice from "../../views/edit-invoice";
import SideContainer from "../sidebar/side-container";
import { InvoiceStatus } from "./invoice-status";
export function InvoiceEntry() {
  const [editInvoice, toggleEditInvoice] = useState(false);

  return (
    <div className="invoices__list-entry">
      <span>Invoice Id</span>
      <span>Invoice Date</span>
      <span>Invoice Name</span>
      <span>Invoice Total</span>
      <InvoiceStatus />
      <button onClick={() => toggleEditInvoice(!editInvoice)}>Carret</button>
      <SideContainer open={editInvoice}>
        <EditInvoice />
      </SideContainer>
    </div>
  );
}
