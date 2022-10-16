const PlusIcon = (props: IPlusIconProps) => {
  return (
    <svg viewBox={`0 0 ${props.width ?? 20} ${props.height ?? 20}`}>
      <svg
        width={props?.width ?? 20}
        height={props?.height ?? 20}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
          fill="#7C5DFA"
          fillRule="nonzero"
        />
      </svg>
    </svg>
  );
};

export default PlusIcon;

export interface IPlusIconProps {
  width?: number;
  height?: number;
  onClick?: () => any;
}
