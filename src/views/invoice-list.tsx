import { InvoiceHeader } from "../components/invoices/invoice-header";
import { InvoiceEntry } from "../components/invoices/invoice-entry";
import { useInvoice } from "../providers/invoice-provider";

export function InvoiceList({ ...props }) {
  const { state, dispatch } = useInvoice();
  return (
    <>
      <InvoiceHeader />
      <div className="invoices__list-wrapper">
        {state.map((invoice, i) => {
          return <InvoiceEntry key={i} invoice={invoice} />;
        })}
      </div>
    </>
  );
}

export default InvoiceList;
