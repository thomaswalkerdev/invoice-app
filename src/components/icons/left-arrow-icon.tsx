const LeftArrowIcon = (props: ILeftArrowIconProps) => {
  return (
    <svg
      width={props?.width ?? 10}
      height={props?.height ?? 10}
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
  );
};

export default LeftArrowIcon;

export interface ILeftArrowIconProps {
  width?: number;
  height?: number;
  onClick?: () => any;
}
