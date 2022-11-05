function NumberField(props: INumberFieldProps) {
  const label = props?.label ? <label>{props?.label}</label> : null;
  return (
    <>
      <div>{label}</div>
      <input
        className="form__text-input"
        type="number"
        value={props?.defaultValue}
        onChange={(e) => props?.onChange(e.target.value)}
      />
    </>
  );
}

export default NumberField;

export interface INumberFieldProps {
  defaultValue?: number;
  label?: string;
  onChange: (value: string) => void;
}
