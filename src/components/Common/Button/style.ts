import styled, { css } from "styled-components";

export interface StyleProps {
	filled?: boolean;
	link?: boolean;
	outline?: boolean;
	primary?: boolean;
}

export const ButtonContainer = styled.button<StyleProps>`
	align-items: center;
	background-color: transparent;
	border: 0;
	border-radius: 5px;
	display: flex;
	gap: 10px;
	font-size: 15px;
	padding: 0;

	${(props) =>
		props.link &&
		css`
			color: ${props.theme.primary};
			text-decoration: underline;
		`}

	${(props) =>
		props.primary &&
		css`
			color: ${props.theme.primary};
		`}

	${(props) =>
		props.filled &&
		css`
			background-color: ${(props) => props.theme.primary};
			color: ${(props) => props.theme.primaryText};
			padding: 8px 10px;
		`}

	${(props) =>
		props.outline &&
		css`
			border: 1px solid ${props.theme.primary};
			color: ${(props) => props.theme.primary};
			padding: 8px 10px;
		`}
`;
