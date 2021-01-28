import { faSignInAlt, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Button, Line } from "../components";

const LandingPageContainer = styled.div`
	align-items: center;
	background-color: white;
	display: flex;
	flex-direction: column;
	gap: 30px;
	height: 100vh;
	justify-content: center;
	width: 100vw;

	& > svg {
		color: ${(props) => props.theme.primary};
	}
`;

const LandingPage: React.FC = () => {
	return (
		<LandingPageContainer>
			<FontAwesomeIcon size='3x' icon={faUserSecret} />
			<Line size={50}>Comming soon</Line>
			<Button primary size={18}>
				Signin
				<FontAwesomeIcon icon={faSignInAlt} />
			</Button>
		</LandingPageContainer>
	);
};

export default LandingPage;
