function DatePickerField(props: IDatePickerFieldProps) {
  return <input type="date" value={props.defaultValue} />;
}

export default DatePickerField;

export interface IDatePickerFieldProps {
  defaultValue?: string;
}
