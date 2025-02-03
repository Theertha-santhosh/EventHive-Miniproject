import React, { FC, MouseEventHandler } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  color?: 'primary' | 'secondary' | 'delete'
}

const Button: FC<ButtonProps> = ({ children, onClick, type = "button", color }) => {
  return (
    <button className={`button ${color}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;