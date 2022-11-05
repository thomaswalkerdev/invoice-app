import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Theme } from "../../enums/theme.enum";
import { Invoice } from "../../models/invoice.model";
import { useTheme } from "../../providers/theme-provider";
import CreateEditInvoice from "../../views/create-edit-invoice";
import SideContainer from "../sidebar/side-container";
import { InvoiceStatus } from "./invoice-status";
export function InvoiceEntry(props: IInvoiceEntryProps) {
  const [editInvoice, toggleEditInvoice] = useState(false);
  const { themeState } = useTheme();
  return (
    <div
      className={`${
        themeState.theme === Theme.Dark
          ? "invoices__list-entry--dark"
          : "invoices__list-entry--light"
      } invoices__list-entry`}
    >
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
