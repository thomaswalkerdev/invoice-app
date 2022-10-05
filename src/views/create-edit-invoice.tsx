import { useEffect, useState } from "react";
import { InvoiceActions } from "../actions/invoice.actions";
import DatePickerField from "../components/forms/date-picker-field";
import DropdownField from "../components/forms/dropdown-field";
import ItemList from "../components/forms/item-list";
import TextField from "../components/forms/text-field";
import { Invoice } from "../models/invoice.model";
import { useInvoice } from "../providers/invoice-provider";
import "../styles/create-invoice.scss";
import { checkAllPropertiesAreNotNull } from "../utils/object.utils";

function CreateEditInvoice(props: ICreateEditInvoiceProps) {
  const { state, dispatch } = useInvoice();

  let invoice = props?.invoiceId
    ? state.find((invoice) => invoice.id === props?.invoiceId)
    : new Invoice();

  const [formValues, updateForm] = useState(invoice ?? new Invoice());
  const [validForm, updateFormValid] = useState(false);
  const paymentTermOptions = [
    { label: "Next Day", value: 1 },
    { label: "Week", value: 7 },
    { label: "Month", value: 30 },
  ];

  function addDays(dateString: string, days: number) {
    let date = new Date(dateString);
    date.setDate(date.getDate() + days);
    return date.toString();
  }

  useEffect(() => {
    function validateFormFields() {
      updateFormValid(true);
      checkAllPropertiesAreNotNull(formValues, () => {
        updateFormValid(false);
      });
    }

    validateFormFields();
  }, [formValues]);

  const submitOptions = props.invoiceId ? (
    <div>
      <button onClick={props?.close}>Cancel</button>
      <button
        disabled={!validForm}
        onClick={() => {
          updateForm({
            ...formValues,
            status: "pending",
            createdAt: new Date().toString(),
            paymentDue: addDays(
              formValues.createdAt ?? new Date().toString(),
              formValues.paymentTerms ?? 0
            ),
          });
          dispatch({ type: InvoiceActions.UpdateInvoice, payload: formValues });
          props.close();
        }}
      >
        Save Changes
      </button>
    </div>
  ) : (
    <div>
      <button onClick={props?.close}>Cancel</button>
      <button
        onClick={() => {
          updateForm({ ...formValues, status: "draft" });
          dispatch({ type: InvoiceActions.CreateInvoice, payload: formValues });
          props.close();
        }}
      >
        Save as Draft
      </button>
      <button
        disabled={!validForm}
        onClick={() => {
          updateForm({
            ...formValues,
            status: "pending",
            createdAt: new Date().toString(),
            paymentDue: addDays(
              formValues.createdAt ?? new Date().toString(),
              formValues.paymentTerms ?? 0
            ),
          });
          dispatch({ type: InvoiceActions.CreateInvoice, payload: formValues });
          props.close();
        }}
      >
        Save & Send
      </button>
    </div>
  );

  return (
    <div className="create-invoice">
      {props.invoiceId ? <h1>Edit Invoice</h1> : <h1>Create Invoice</h1>}
      <h4>Bill From</h4>
      <TextField
        label="Street"
        defaultValue={formValues?.senderAddress?.street}
        onChange={(value) =>
          updateForm({
            ...formValues,
            senderAddress: { ...formValues.senderAddress, street: value },
          })
        }
      />
      <TextField
        label="City"
        defaultValue={formValues?.senderAddress?.city}
        onChange={(value) =>
          updateForm({
            ...formValues,
            senderAddress: { ...formValues.senderAddress, city: value },
          })
        }
      />
      <TextField
        label="Post Code"
        defaultValue={formValues?.senderAddress?.postCode}
        onChange={(value) =>
          updateForm({
            ...formValues,
            senderAddress: { ...formValues.senderAddress, postCode: value },
          })
        }
      />
      <TextField
        label="Country"
        defaultValue={formValues?.senderAddress?.country}
        onChange={(value) =>
          updateForm({
            ...formValues,
            senderAddress: { ...formValues.senderAddress, country: value },
          })
        }
      />
      <h4>Bill To</h4>
      <TextField
        label="Client's Name"
        defaultValue={formValues?.clientName}
        onChange={(value) =>
          updateForm({
            ...formValues,
            clientName: value,
          })
        }
      />
      <TextField
        label="Client's Email"
        defaultValue={formValues?.clientEmail}
        onChange={(value) =>
          updateForm({
            ...formValues,
            clientEmail: value,
          })
        }
      />
      <TextField
        label="Street Address"
        defaultValue={formValues?.clientAddress?.street}
        onChange={(value) =>
          updateForm({
            ...formValues,
            clientAddress: {
              ...formValues.clientAddress,
              street: value,
            },
          })
        }
      />
      <TextField
        label="City"
        defaultValue={formValues?.clientAddress?.city}
        onChange={(value) =>
          updateForm({
            ...formValues,
            clientAddress: {
              ...formValues.clientAddress,
              city: value,
            },
          })
        }
      />
      <TextField
        label="Post Code"
        defaultValue={formValues?.clientAddress?.postCode}
        onChange={(value) =>
          updateForm({
            ...formValues,
            clientAddress: {
              ...formValues.clientAddress,
              postCode: value,
            },
          })
        }
      />
      <TextField
        label="Country"
        defaultValue={formValues?.clientAddress?.country}
        onChange={(value) =>
          updateForm({
            ...formValues,
            clientAddress: {
              ...formValues.clientAddress,
              country: value,
            },
          })
        }
      />
      <DatePickerField
        label="Invoice Date"
        defaultValue={formValues?.createdAt ?? new Date().toString()}
      />
      <DropdownField
        label="Payment Terms"
        options={paymentTermOptions}
        defaultValue={formValues?.paymentTerms}
        onChange={(value) =>
          updateForm({
            ...formValues,
            paymentTerms: value,
          })
        }
      ></DropdownField>
      <TextField
        label="Product Description"
        defaultValue={formValues?.description}
        onChange={(value) =>
          updateForm({
            ...formValues,
            description: value,
          })
        }
      />
      <ItemList
        items={formValues?.items}
        onItemsUpdated={(items) => updateForm({ ...formValues, items: items })}
      />
      {submitOptions}
    </div>
  );
}

export default CreateEditInvoice;

export interface ICreateEditInvoiceProps {
  invoiceId?: string;
  close: () => void;
}
