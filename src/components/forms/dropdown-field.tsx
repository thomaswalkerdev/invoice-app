function DropdownField(props: IDropdownFieldProps) {
  const label = props?.label ? <label>{props?.label}</label> : null;

  return (
    <>
      <div>{label}</div>
      <select
        onChange={(event) => props.onChange(event.target.value)}
        value={props?.defaultValue}
        className="form__text-input"
      >
        {props?.options.map((option, index) => {
          return (
            <option key={index} value={option?.value}>
              {option?.label}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default DropdownField;

export interface IDropdownFieldProps {
  label?: string;
  options: DropdownItem[];
  defaultValue?: any;
  onChange: (value: any) => void;
}

export class DropdownItem {
  label: string;
  value?: string | number;
}
