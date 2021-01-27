import React from "react";
import { GlobalStyle } from "./globalStyle";
import { LandingPage } from "./pages";

const App: React.FC = () => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<LandingPage></LandingPage>
		</React.Fragment>
	);
};

export default App;
