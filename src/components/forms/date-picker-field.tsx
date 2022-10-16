function DatePickerField(props: IDatePickerFieldProps) {
  const label = props?.label ? <label>{props?.label}</label> : null;
  return (
    <div className="form__field-wrapper">
      <div>{label}</div>
      <input
        className="form__text-input"
        type="date"
        value={props?.defaultValue}
        readOnly
      />
    </div>
  );
}

export default DatePickerField;

export interface IDatePickerFieldProps {
  defaultValue?: string;
  label: string;
}
