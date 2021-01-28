import React from "react";
import { LineContainer, StyleProps } from "./style";

interface Props extends StyleProps {
	children?: React.ReactNode;
}

const Line: React.FC<Props> = ({ children, ...props }: Props) => {
	return <LineContainer {...props}>{children}</LineContainer>;
};

export default Line;
