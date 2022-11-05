function DatePickerField(props: IDatePickerFieldProps) {
  const label = props?.label ? <label>{props?.label}</label> : null;
  return (
    <>
      <div>{label}</div>
      <input
        className="form__text-input"
        type="date"
        value={props?.defaultValue}
        readOnly
      />
    </>
  );
}

export default DatePickerField;

export interface IDatePickerFieldProps {
  defaultValue?: string;
  label: string;
}
