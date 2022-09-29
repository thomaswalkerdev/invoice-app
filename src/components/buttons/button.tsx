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
    >
      {props.buttonStyle === ButtonStyleEnum.Icon ? (
        <CircleIcon />
      ) : props.buttonStyle === ButtonStyleEnum.Add ? (
        <SmallIcon />
      ) : null}
      {props?.children}
    </button>
  );
};

const CircleIcon = () => {
  return <div>Y</div>;
};

const SmallIcon = () => {
  return <div>X</div>;
};

export interface IButtonProps {
  children?: any;
  type?: any;
  onClick?: () => {};
  buttonStyle: ButtonStyleEnum;
  buttonSize: ButtonSizeEnum;
}

export default Button;
