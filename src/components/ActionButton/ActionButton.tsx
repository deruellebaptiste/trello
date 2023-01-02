import clsx from "clsx";
import React, { ReactElement } from "react";
import "./ActionButton.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  followed: boolean;
  icon?: ReactElement;
  className?: string;
}
const ActionButton = ({
  className,
  children,
  icon,
  followed,
  ...props
}: IProps) => {
  return (
    <button className={clsx("actionButton", className)} {...props}>
      <span className="iconLeft">{icon}</span>
      {children}
      {followed && (
        <span className="checkContainer">
          <span className="check"></span>
        </span>
      )}
    </button>
  );
};

export default ActionButton;
