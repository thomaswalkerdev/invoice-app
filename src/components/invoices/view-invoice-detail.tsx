import { Invoice } from "../../models/invoice.model";
import ViewInvoiceItems from "./view-invoice-items";
import "../../styles/view-invoice.scss";

function ViewInvoiceDetail(props: IViewInvoiceDetailProps) {
  let invoice = props?.invoice ?? new Invoice();
  return (
    <div className="view-invoice__body">
      <div className="view-invoice__row">
        <div>
          <p>#{invoice.id}</p>
          <p>{invoice.description}</p>
        </div>
        <div>
          <p>{invoice?.senderAddress?.street}</p>
          <p>{invoice.senderAddress?.city}</p>
          <p>{invoice.senderAddress?.postCode}</p>
          <p>{invoice.senderAddress?.country}</p>
        </div>
      </div>

      <div className="view-invoice__row">
        <div>
          <p>Invoice Date: {invoice?.createdAt}</p>
          <p>Payment Due: {invoice?.paymentDue}</p>
        </div>
        <div>
          <p>Bill to: {invoice?.clientName}</p>
          <p>{invoice?.clientAddress?.street}</p>
          <p>{invoice.clientAddress?.city}</p>
          <p>{invoice.clientAddress?.postCode}</p>
          <p>{invoice.clientAddress?.country}</p>
        </div>
        <div>
          <p>Sent to: {invoice?.clientEmail}</p>
        </div>
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
