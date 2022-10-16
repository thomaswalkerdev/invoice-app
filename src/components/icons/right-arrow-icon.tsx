const RightArrowIcon = (props: IRightArrowIconProps) => {
  return (
    <svg width={10} height={10}>
      <svg className={style} xmlns="http://www.w3.org/2000/svg">
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

const style = `
    transform: scale(2, 2);
`;
