import { Invoice } from "../../models/invoice.model";
import ViewInvoiceItems from "./view-invoice-items";
import "../../styles/view-invoice.scss";

function ViewInvoiceDetail(props: IViewInvoiceDetailProps) {
  let invoice = props?.invoice ?? new Invoice();
  return (
    <div className="view-invoice__body">
      <div className="view-invoice__row">
        <div className="view-invoice__section">
          <div className="view-invoice__entry">
            <p className="view-invoice__value view-invoice__value--bold">
              #{invoice.id}
            </p>
            <p className="view-invoice__value">{invoice.description}</p>
          </div>
        </div>
        <div className="view-invoice__section view-invoice__entry--right">
          <p className="view-invoice__value view-invoice__value--small">
            {invoice?.senderAddress?.street}
          </p>
          <p className="view-invoice__value view-invoice__value--small">
            {invoice.senderAddress?.city}
          </p>
          <p className="view-invoice__value view-invoice__value--small">
            {invoice.senderAddress?.postCode}
          </p>
          <p className="view-invoice__value view-invoice__value--small">
            {invoice.senderAddress?.country}
          </p>
        </div>
      </div>

      <div className="view-invoice__row">
        <div className="view-invoice__section">
          <div className="view-invoice__entry">
            <p className="view-invoice__label">Invoice Date:</p>
            <p className="view-invoice__value view-invoice__value--bold">
              {invoice?.createdAt}
            </p>
          </div>
          <div className="view-invoice__entry">
            <p className="view-invoice__label">Payment Due:</p>
            <p className="view-invoice__value view-invoice__value--bold">
              {invoice?.paymentDue}
            </p>
          </div>
        </div>
        <div className="view-invoice__section">
          <div className="view-invoice__entry">
            <p className="view-invoice__label">Bill to: </p>
            <p className="view-invoice__value view-invoice__value--bold">
              {invoice?.clientName}
            </p>
          </div>
          <div className="view-invoice__entry">
            <p className="view-invoice__value view-invoice__value--small">
              {invoice?.clientAddress?.street}
            </p>
            <p className="view-invoice__value view-invoice__value--small">
              {invoice.clientAddress?.city}
            </p>
            <p className="view-invoice__value view-invoice__value--small">
              {invoice.clientAddress?.postCode}
            </p>
            <p className="view-invoice__value view-invoice__value--small">
              {invoice.clientAddress?.country}
            </p>
          </div>
        </div>
        <div className="view-invoice__section">
          <div className="view-invoice__entry">
            <p className="view-invoice__label">Sent to: </p>
            <p className="view-invoice__value view-invoice__value--bold">
              {invoice?.clientEmail}
            </p>
          </div>
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
