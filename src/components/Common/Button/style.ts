import styled from "styled-components";

export const ButtonContainer = styled.button`
	align-items: center;
	background-color: ${(props) => props.theme.primary};
	border: 0;
	border-radius: 5px;
	color: ${(props) => props.theme.primaryText};
	display: flex;
	gap: 10px;
	font-size: 15px;
	padding: 8px 10px;
`;
