function NumberField(props: INumberFieldProps) {
  const label = props?.label ? <label>{props?.label}</label> : null;
  return (
    <div>
      {label}
      <input
        type="number"
        value={props?.defaultValue}
        onChange={(e) => props?.onChange(parseInt(e.target.value))}
      />
    </div>
  );
}

export default NumberField;

export interface INumberFieldProps {
  defaultValue?: number;
  label?: string;
  onChange: (value: number) => void;
}
