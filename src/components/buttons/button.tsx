import React from "react";
import ButtonSizeEnum from "../../enums/button-size.enum";
import ButtonStyleEnum from "../../enums/button-style.enum";
import "../../styles/buttons.scss";

export const Button = (props: IButtonProps) => {
  return (
    <button
      onClick={props?.onClick}
      className={`btn ${props.buttonStyle} ${props.buttonSize}`}
      type={props?.type}
      disabled={props?.disabled}
    >
      {props.buttonStyle === ButtonStyleEnum.Icon ? (
        <CircleIcon />
      ) : props.buttonStyle === ButtonStyleEnum.Add ? (
        <>+</>
      ) : null}
      {props?.children}
    </button>
  );
};

const CircleIcon = () => {
  return <span className="btn__icon-wrapper">+</span>;
};

const SmallIcon = () => {
  return <span className="btn__icon-wrapper">X</span>;
};

export interface IButtonProps {
  children?: any;
  type?: any;
  disabled?: boolean;
  onClick?: () => void;
  buttonStyle: ButtonStyleEnum;
  buttonSize: ButtonSizeEnum;
}

export default Button;
