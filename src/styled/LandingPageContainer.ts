import React from "react";
import styled from "styled-components";

const LandingPageContainer = (): React.ReactNode => {
	return styled.div`
		align-items: center;
		background-color: white;
		display: flex;
		flex-direction: column;
		gap: 30px;
		height: 100vh;
		justify-content: center;
		width: 100vw;
	`;
};

export default LandingPageContainer;
