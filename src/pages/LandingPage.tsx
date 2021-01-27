import React from "react";
import styled from "styled-components";

const LandingPageContainer = styled.div`
	align-items: center;
	background-color: #101010;
	display: flex;
	height: 100vh;
	justify-content: center;
	width: 100vw;
`;

const Line = styled.p`
	color: white;
	font-size: 50px;
`;

const LandingPage: React.FC = () => {
	return (
		<LandingPageContainer>
			<Line>Comming soon</Line>
		</LandingPageContainer>
	);
};

export default LandingPage;
