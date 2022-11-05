import { useState } from "react";
import ButtonSizeEnum from "../../enums/button-size.enum";
import ButtonStyleEnum from "../../enums/button-style.enum";
import { Invoice } from "../../models/invoice.model";
import CreateEditInvoice from "../../views/create-edit-invoice";
import Button from "../buttons/button";
import SideContainer from "../sidebar/side-container";
import "../../styles/view-invoice.scss";
import InvoiceStatus from "./invoice-status";
import { useInvoice } from "../../providers/invoice-provider";
import { InvoiceActions } from "../../actions/invoice.actions";
import { useTheme } from "../../providers/theme-provider";

function ViewInvoiceHeader(props: IViewInvoiceHeaderProps) {
  const [editInvoice, toggleEditInvoice] = useState(false);
  const { state, dispatch } = useInvoice();
  const { themeState } = useTheme();

  return (
    <>
      <div className="view-invoice__header">
        <div className="view-invoice__status">
          <span>Status:</span>
          <InvoiceStatus
            status={props?.invoice?.status}
            invoiceId={props?.invoice?.id ?? ""}
          />
        </div>
        <div className="view-invoice__buttons">
          <Button
            buttonSize={ButtonSizeEnum.Medium}
            buttonStyle={ButtonStyleEnum.Edit}
            onClick={() => toggleEditInvoice(!editInvoice)}
          >
            Edit
          </Button>
          <Button
            buttonSize={ButtonSizeEnum.Medium}
            buttonStyle={ButtonStyleEnum.Delete}
          >
            Delete
          </Button>
          <Button
            disabled={props?.invoice?.status === "paid"}
            buttonSize={ButtonSizeEnum.Medium}
            buttonStyle={ButtonStyleEnum.PrimaryAction}
            onClick={() =>
              dispatch({
                type: InvoiceActions.UpdateInvoice,
                payload: { ...props.invoice, status: "paid" },
              })
            }
          >
            Mark as Paid
          </Button>
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
