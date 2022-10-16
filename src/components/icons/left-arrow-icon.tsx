const LeftArrowIcon = (props: ILeftArrowIconProps) => {
  return (
    <svg viewBox={`0 0 ${props.width ?? 100} ${props.height ?? 100}`}>
      <svg
        width={props?.width ?? 20}
        height={props?.height ?? 20}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.342.886L2.114 5.114l4.228 4.228"
          stroke="#9277FF"
          stroke-width="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </svg>
  );
};

export default LeftArrowIcon;

export interface ILeftArrowIconProps {
  width?: number;
  height?: number;
  onClick?: () => any;
}
