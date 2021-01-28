import styled from "styled-components";

export interface StyleProps {
	bold?: boolean;
	size?: number;
}

export const LineContainer = styled.p<StyleProps>`
	color: ${(props) => props.theme.text};
	font-size: ${(props) => props.size}px;
	font-weight: ${(props) => props.bold && "bold"};
`;
