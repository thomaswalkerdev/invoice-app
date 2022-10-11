import { Link, useParams } from "react-router-dom";
import ViewInvoiceDetail from "../components/invoices/view-invoice-detail";
import ViewInvoiceHeader from "../components/invoices/view-invoice-header";
import { Invoice } from "../models/invoice.model";
import { useInvoice } from "../providers/invoice-provider";

function InvoiceDetail() {
  let { invoiceId } = useParams();
  const { state, dispatch } = useInvoice();

  let invoice =
    state.find((invoice) => invoice.id === invoiceId) ?? new Invoice();

  return (
    <div className="view-invoice__wrapper">
      <div className="view-invoice__back">
        <Link to="/">{"<"} Go back</Link>
      </div>
      <ViewInvoiceHeader invoice={invoice} />
      <ViewInvoiceDetail invoice={invoice} />
    </div>
  );
}

export default InvoiceDetail;
