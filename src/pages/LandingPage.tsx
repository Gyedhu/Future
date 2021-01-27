import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const LandingPageContainer = styled.div`
	align-items: center;
	background-color: white;
	display: flex;
	flex-direction: column;
	gap: 30px;
	height: 100vh;
	justify-content: center;
	width: 100vw;
`;

const Line = styled.p`
	color: #454545;
	font-size: 50px;
	text-align: center;
`;

const Button = styled.button`
	background-color: #49886b;
	border: 0;
	border-radius: 5px;
	color: white;
	font-size: 18px;
	outline: 0;
	padding: 10px 50px;
`;

const LandingPage: React.FC = () => {
	return (
		<LandingPageContainer>
			<FontAwesomeIcon size='3x' icon={faUserSecret} color='#49886b' />
			<Line>Comming soon</Line>
			<Button>Signin</Button>
		</LandingPageContainer>
	);
};

export default LandingPage;
