import React from "react";
import { GlobalStyle } from "./globalStyle";
import Router from "./Router";

const App: React.FC = () => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Router />
		</React.Fragment>
	);
};

export default App;
