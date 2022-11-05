import { useState } from "react";
import ButtonSizeEnum from "../../enums/button-size.enum";
import ButtonStyleEnum from "../../enums/button-style.enum";
import Button from "../buttons/button";
import "../../styles/invoices.scss";
import SideContainer from "../sidebar/side-container";
import { useInvoice } from "../../providers/invoice-provider";
import CreateEditInvoice from "../../views/create-edit-invoice";
import DropdownField from "../forms/dropdown-field";

export function InvoiceHeader(props: IInvoiceHeaderProps) {
  const [createInvoice, toggleCreateInvoice] = useState(false);
  const invoiceState = useInvoice();
  return (
    <>
      <div className="invoices__wrapper">
        <div>
          <h1>Invoices</h1>
          <h4>There are {invoiceState?.state?.length} Total Invoices</h4>
        </div>
        <div className="invoices__actions-wrapper">
          <div>
            <DropdownField
              options={[
                { label: "All", value: "" },
                { label: "Draft", value: "draft" },
                { label: "Paid", value: "paid" },
                { label: "Pending", value: "pending" },
              ]}
              onChange={(value) => {
                props.filterChanged(value);
              }}
            />
          </div>
          <Button
            buttonSize={ButtonSizeEnum.Medium}
            buttonStyle={ButtonStyleEnum.Icon}
            onClick={() => toggleCreateInvoice(!createInvoice)}
          >
            New Invoice
          </Button>
        </div>
      </div>
      <SideContainer open={createInvoice}>
        <CreateEditInvoice close={() => toggleCreateInvoice(!createInvoice)} />
      </SideContainer>
    </>
  );
}

export interface IInvoiceHeaderProps {
  filterChanged: (event: string) => void;
}
