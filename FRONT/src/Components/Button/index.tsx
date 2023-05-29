import React from "react";
import { StyledButton } from "./style";

type ButtonProps = {
    onClick?: () => void;
    children: React.ReactNode;
    buttonType?: "submit" | "reset" | "button";
};

const Button: React.FC<ButtonProps> = ({ children, onClick, buttonType }) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
