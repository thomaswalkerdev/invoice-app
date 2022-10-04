import React from "react";
import DatePickerField from "../components/forms/date-picker-field";
import TextField from "../components/forms/text-field";
import "../styles/create-invoice.scss";

function CreateInvoice() {
  return (
    <div className="create-invoice">
      <h1>New Invoice</h1>
      <h4>Bill From</h4>
      {/* <TextField label="Street Address" />
      <TextField label="City" />
      <TextField label="Post Code" />
      <TextField label="Country" />
      <h4>Bill To</h4>
      <TextField label="Client's Name" />
      <TextField label="Client's Email" />
      <TextField label="Street Address" />
      <TextField label="City" />
      <TextField label="Post Code" />
      <TextField label="Country" />
      <DatePickerField />
      {/* <DropdownField></DropdownField> */}
      {/* <TextField label="Product Description" /> */}
      {/* <ItemList /> */}
    </div>
  );
}

export default CreateInvoice;
