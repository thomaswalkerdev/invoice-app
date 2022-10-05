import { Invoice } from "../../models/invoice.model";
import ViewInvoiceItems from "./view-invoice-items";

function ViewInvoiceDetail(props: IViewInvoiceDetailProps) {
  let invoice = props?.invoice ?? new Invoice();
  return (
    <div>
      <div>
        <span>#{invoice.id}</span>
        <span>{invoice.description}</span>
        <span>{invoice?.senderAddress?.street}</span>
        <span>{invoice.senderAddress?.city}</span>
        <span>{invoice.senderAddress?.postCode}</span>
        <span>{invoice.senderAddress?.country}</span>
      </div>

      <div>
        <span>Invoice Date: {invoice?.createdAt}</span>
        <span>Bill to: {invoice?.clientName}</span>
        <span>Sent to: {invoice?.clientEmail}</span>
        <span>Payment Due: {invoice?.paymentDue}</span>
        <span>{invoice?.clientAddress?.street}</span>
        <span>{invoice.clientAddress?.city}</span>
        <span>{invoice.clientAddress?.postCode}</span>
        <span>{invoice.clientAddress?.country}</span>
      </div>

      <ViewInvoiceItems
        items={invoice?.items ?? []}
        total={invoice?.total ?? 0}
      />
    </div>
  );
}

export default ViewInvoiceDetail;

interface IViewInvoiceDetailProps {
  invoice?: Invoice;
}
