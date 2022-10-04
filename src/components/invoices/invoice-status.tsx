import React from "react";

export const InvoiceStatus = (props: IInvoiceStatusProps) => {
  return <span>{props?.status}</span>;
};

export default InvoiceStatus;

export interface IInvoiceStatusProps {
  status: string;
}
