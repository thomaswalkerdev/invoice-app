function DatePickerField(props: IDatePickerFieldProps) {
  return (
    <>
      <label>{props?.label}</label>
      <input
        type="date"
        value={props.defaultValue}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </>
  );
}

export default DatePickerField;

export interface IDatePickerFieldProps {
  defaultValue?: string;
  label: string;
  onChange: (value: string) => void;
}
