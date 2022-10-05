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
    <div>
      <Link to="/">{"<"} Go back</Link>
      <ViewInvoiceHeader invoice={invoice} />
      <ViewInvoiceDetail invoice={invoice} />
    </div>
  );
}

export default InvoiceDetail;
