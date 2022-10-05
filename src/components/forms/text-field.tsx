function TextField(props: ITextFieldProps) {
  const label = props?.label ? <label>{props?.label}</label> : null;
  return (
    <div>
      {label}
      <input
        type="text"
        value={props?.defaultValue}
        onChange={(e) => props?.onChange(e.target.value)}
      />
    </div>
  );
}

export default TextField;

export interface ITextFieldProps {
  defaultValue?: string;
  label?: string;
  onChange: (value: string) => void;
}
