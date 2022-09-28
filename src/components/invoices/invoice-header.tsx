import React from "react";
import ButtonSizeEnum from "../../enums/button-size.enum.ts";
import ButtonStyleEnum from "../../enums/button-style.enum.ts";
import Button from "../buttons/button.tsx";
import "../../styles/invoices.scss";
export function InvoiceHeader() {
  return (
    <div className="invoices__wrapper">
      <div>
        <h1>Invoices</h1>
        <h4>There are X Total Invoices</h4>
      </div>
      <div className="invoices__actions-wrapper">
        <div>Filter dropdown</div>
        <Button
          buttonSize={ButtonSizeEnum.Medium}
          buttonStyle={ButtonStyleEnum.Icon}
        >
          New Invoice
        </Button>
      </div>
    </div>
  );
}
