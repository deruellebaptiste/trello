import clsx from "clsx";
import React from "react";
import "./Button.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  ternary?: boolean;
  floating?: boolean;
  className?: string;
}
const Button = ({
  className,
  children,
  primary,
  secondary,
  ternary,
  floating,
  ...props
}: IProps) => {
  return (
    <button
      className={clsx(
        "button",
        primary && "primary",
        secondary && "secondary",
        ternary && "ternary",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
