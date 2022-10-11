import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Invoice } from "../../models/invoice.model";
import CreateEditInvoice from "../../views/create-edit-invoice";
import SideContainer from "../sidebar/side-container";
import { InvoiceStatus } from "./invoice-status";
export function InvoiceEntry(props: IInvoiceEntryProps) {
  const [editInvoice, toggleEditInvoice] = useState(false);

  return (
    <div className="invoices__list-entry">
      <span>
        #<strong>{props?.invoice?.id}</strong>
      </span>
      <span>Due {props?.invoice?.createdAt}</span>
      <span>{props?.invoice?.clientName}</span>
      <span>
        <strong>£{props?.invoice?.total}</strong>
      </span>
      <InvoiceStatus
        status={props?.invoice?.status}
        invoiceId={props?.invoice?.id ?? ""}
      />

      <SideContainer open={editInvoice}>
        <CreateEditInvoice
          close={() => toggleEditInvoice(!editInvoice)}
          invoiceId={props?.invoice?.id}
        />
      </SideContainer>
    </div>
  );
}

export interface IInvoiceEntryProps {
  invoice: Invoice;
}
