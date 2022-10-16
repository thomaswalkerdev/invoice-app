const CheckIcon = (props: ICheckIconProps) => {
  return (
    <svg viewBox={`0 0 ${props.width ?? 20} ${props.height ?? 20}`}>
      <svg
        width={props?.width ?? 20}
        height={props?.height ?? 20}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 4.5l2.124 2.124L8.97 1.28"
          stroke="#FFF"
          stroke-width="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </svg>
  );
};

export default CheckIcon;

export interface ICheckIconProps {
  width?: number;
  height?: number;
  onClick?: () => any;
}
