import React from "react";
import { Route, Switch } from "react-router-dom";
import { LandingPage } from "./pages";

const Router: React.FC = () => {
	return (
		<Switch>
			<Route component={LandingPage} />
		</Switch>
	);
};

export default Router;
