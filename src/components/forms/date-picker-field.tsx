function DatePickerField(props: IDatePickerFieldProps) {
  return (
    <>
      <label>{props?.label}</label>
      <input type="date" value={props.defaultValue} />
    </>
  );
}

export default DatePickerField;

export interface IDatePickerFieldProps {
  defaultValue?: string;
  label: string;
}
