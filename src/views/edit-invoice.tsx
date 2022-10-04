import React, { useState } from "react";
import DatePickerField from "../components/forms/date-picker-field";
import TextField from "../components/forms/text-field";
import { Invoice } from "../models/invoice.model";
import { useInvoice } from "../providers/invoice-provider";
import "../styles/create-invoice.scss";

function EditInvoice() {
  const [formValues, updateForm] = useState(new Invoice());
  const { state, dispatch } = useInvoice();

  return (
    <div className="create-invoice">
      <h1>New Invoice</h1>
      <h4>Bill From</h4>
      <TextField
        label="Street"
        onChange={(value) =>
          updateForm({
            ...formValues,
            address: { ...formValues.address, street: value },
          })
        }
      />
      <TextField
        label="City"
        onChange={(value) =>
          updateForm({
            ...formValues,
            address: { ...formValues.address, city: value },
          })
        }
      />
      <TextField
        label="Post Code"
        onChange={(value) =>
          updateForm({
            ...formValues,
            address: { ...formValues.address, postcode: value },
          })
        }
      />
      <TextField
        label="Country"
        onChange={(value) =>
          updateForm({
            ...formValues,
            address: { ...formValues.address, country: value },
          })
        }
      />
      <h4>Bill To</h4>
      <TextField
        label="Client's Name"
        onChange={(value) =>
          updateForm({
            ...formValues,
            client: { ...formValues.client, name: value },
          })
        }
      />
      <TextField
        label="Client's Email"
        onChange={(value) =>
          updateForm({
            ...formValues,
            client: { ...formValues.client, name: value },
          })
        }
      />
      <TextField
        label="Street Address"
        onChange={(value) =>
          updateForm({
            ...formValues,
            client: {
              ...formValues.client,
              address: { ...formValues.client.address, street: value },
            },
          })
        }
      />
      <TextField
        label="City"
        onChange={(value) =>
          updateForm({
            ...formValues,
            client: {
              ...formValues.client,
              address: { ...formValues.client.address, city: value },
            },
          })
        }
      />
      <TextField
        label="Post Code"
        onChange={(value) =>
          updateForm({
            ...formValues,
            client: {
              ...formValues.client,
              address: { ...formValues.client.address, postcode: value },
            },
          })
        }
      />
      <TextField
        label="Country"
        onChange={(value) =>
          updateForm({
            ...formValues,
            client: {
              ...formValues.client,
              address: { ...formValues.client.address, country: value },
            },
          })
        }
      />
      <DatePickerField />
      {/* <DropdownField></DropdownField> */}
      <TextField
        label="Product Description"
        onChange={(value) =>
          updateForm({
            ...formValues,
            productDescription: value,
          })
        }
      />
      {/* <ItemList /> */}
      <button onClick={() => console.log("form value", formValues)}>
        SUBMIT
      </button>
    </div>
  );
}

export default EditInvoice;
