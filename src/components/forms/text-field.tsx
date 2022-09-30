function TextField(props: ITextFieldProps) {
  return (
    <div>
      <label>{props?.label}</label>
      <input type="text" value={props?.defaultValue} />
    </div>
  );
}

export default TextField;

export interface ITextFieldProps {
  defaultValue?: string;
  label: string;
}
