import React from "react";
import { Link, useParams } from "react-router-dom";
import ViewInvoiceDetail from "../components/invoices/view-invoice-detail";
import ViewInvoiceHeader from "../components/invoices/view-invoice-header";
import { Invoice } from "../models/invoice.model";
import { useInvoice } from "../providers/invoice-provider";
import LeftArrowIcon from "../components/icons/left-arrow-icon";

function InvoiceDetail() {
  let { invoiceId } = useParams();
  const { state, dispatch } = useInvoice();

  let invoice =
    state.find((invoice) => invoice.id === invoiceId) ?? new Invoice();

  return (
    <div className="view-invoice__wrapper">
      <div className="view-invoice__back">
        <Link to="/">
          <div className="view-invoice__go-back">
            <LeftArrowIcon /> <span>Go back</span>
          </div>
        </Link>
      </div>
      <ViewInvoiceHeader invoice={invoice} />
      <ViewInvoiceDetail invoice={invoice} />
    </div>
  );
}

export default InvoiceDetail;
