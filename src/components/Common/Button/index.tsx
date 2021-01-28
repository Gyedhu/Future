import React from "react";
import { ButtonContainer } from "./style";

interface Props {
	children: React.ReactNode;
}

const Button: React.FC<Props> = ({ children }: Props) => {
	return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;
