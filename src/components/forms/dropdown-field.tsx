function DropdownField(props: IDropdownFieldProps) {
  return (
    <div>
      <label>{props?.label}</label>
      <select
        onChange={(event) => props.onChange(event.target.value)}
        value={props?.defaultValue}
      >
        {props?.options.map((option, index) => {
          return (
            <option key={index} value={option?.value}>
              {option?.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DropdownField;

export interface IDropdownFieldProps {
  label: string;
  options: any[];
  defaultValue?: any;
  onChange: (value: any) => void;
}

export class DropdownItem {
  label: string;
  value: string;
}
