import React from "react";
import EmptyIcon from "../icons/empty-icon";
export const NoInvoices = () => {
  return (
    <div>
      <EmptyIcon />
      <h1>There is nothing here</h1>
      <p>
        Create an invoice by clicking the New Invoice button and get started
      </p>
    </div>
  );
};
