const LogoIcon = (props: ILogoIconProps) => {
  return (
    <svg viewBox={`0 0 ${props.width ?? 20} ${props.height ?? 20}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props?.width ?? 20}
        height={props?.height ?? 20}
      >
        <path
          fill="#FFF"
          fill-rule="evenodd"
          d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
        />
      </svg>
    </svg>
  );
};

export default LogoIcon;

export interface ILogoIconProps {
  width?: number;
  height?: number;
  onClick?: () => any;
}
