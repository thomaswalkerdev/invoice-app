import React from "react";
import { Link } from "react-router-dom";

export const InvoiceStatus = (props: IInvoiceStatusProps) => {
  return (
    <div>
      <span className={`invoice__status invoice__status--${props?.status}`}>
        {props?.status}
      </span>
      <Link
        to={props.invoiceId ?? ""}
        // onClick={() => toggleEditInvoice(!editInvoice)}
      >
        {">"}
      </Link>
    </div>
  );
};

export default InvoiceStatus;

export interface IInvoiceStatusProps {
  status: string;
  invoiceId: string;
}
