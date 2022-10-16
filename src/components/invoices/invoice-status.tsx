import React from "react";
import { Link } from "react-router-dom";
import RightArrowIcon from "../icons/right-arrow-icon";

export const InvoiceStatus = (props: IInvoiceStatusProps) => {
  return (
    <div>
      <span className={`invoice__status invoice__status--${props?.status}`}>
        {props?.status}
      </span>
      <Link to={props.invoiceId ?? ""}>
        <RightArrowIcon />
      </Link>
    </div>
  );
};

export default InvoiceStatus;

export interface IInvoiceStatusProps {
  status: string;
  invoiceId: string;
}
