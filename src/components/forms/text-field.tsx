function TextField(props: ITextFieldProps) {
  return (
    <div>
      <label>{props?.label}</label>
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
  label: string;
  onChange: (value: string) => void;
}
