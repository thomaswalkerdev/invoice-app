const RightArrowIcon = (props: IRightArrowIconProps) => {
  return (
    <svg width={20} height={20}>
      <svg
        width={props?.width ?? 100}
        height={props?.height ?? 100}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1l4 4-4 4"
          stroke="#7C5DFA"
          stroke-width="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </svg>
  );
};

export default RightArrowIcon;

export interface IRightArrowIconProps {
  width?: number;
  height?: number;
  onClick?: () => any;
}
