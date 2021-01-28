import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle";
import Router from "./Router";

const App: React.FC = () => {
	const theme = {
		background: "white",
		text: "#252525",
		primary: "#49886b",
		primaryText: "white",
	};

	return (
		<ThemeProvider {...{ theme }}>
			<GlobalStyle />
			<Router />
		</ThemeProvider>
	);
};

export default App;
