import React from "react";
import { ButtonContainer, StyleProps } from "./style";

interface Props extends StyleProps {
	children: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<Props> = ({ children, ...props }: Props) => {
	return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
