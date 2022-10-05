import { useState } from "react";
import ButtonSizeEnum from "../../enums/button-size.enum";
import ButtonStyleEnum from "../../enums/button-style.enum";
import { Invoice } from "../../models/invoice.model";
import CreateEditInvoice from "../../views/create-edit-invoice";
import Button from "../buttons/button";
import SideContainer from "../sidebar/side-container";

function ViewInvoiceHeader(props: IViewInvoiceHeaderProps) {
  const [editInvoice, toggleEditInvoice] = useState(false);

  return (
    <>
      <div>
        <span>Status: {props?.invoice?.status}</span>
        <div>
          <Button
            buttonSize={ButtonSizeEnum.Medium}
            buttonStyle={ButtonStyleEnum.Icon}
            onClick={() => toggleEditInvoice(!editInvoice)}
          >
            Edit
          </Button>
          <button>Delete</button>
          <button>Mark as Paid</button>
        </div>
      </div>
      <SideContainer open={editInvoice}>
        <CreateEditInvoice
          invoiceId={props?.invoice?.id}
          close={() => toggleEditInvoice(!editInvoice)}
        />
      </SideContainer>
    </>
  );
}

export default ViewInvoiceHeader;

interface IViewInvoiceHeaderProps {
  invoice: Invoice;
}
