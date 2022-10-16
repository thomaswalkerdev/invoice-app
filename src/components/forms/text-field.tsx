import "../../styles/forms.scss";

function TextField(props: ITextFieldProps) {
  const label = props?.label ? <label>{props?.label}</label> : null;
  return (
    <div className="form__field-wrapper">
      <div>{label}</div>
      <input
        className="form__text-input"
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
  stretched?: boolean;
  onChange: (value: string) => void;
}
