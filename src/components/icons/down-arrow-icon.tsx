const DownArrowIcon = (props: IDownArrowIconProps) => {
  return (
    <svg viewBox={`0 0 ${props.width ?? 20} ${props.height ?? 20}`}>
      <svg
        width={props?.width ?? 20}
        height={props?.height ?? 20}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1l4.228 4.228L9.456 1"
          stroke="#7C5DFA"
          stroke-width="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </svg>
  );
};

export default DownArrowIcon;

export interface IDownArrowIconProps {
  width?: number;
  height?: number;
  onClick?: () => any;
}
