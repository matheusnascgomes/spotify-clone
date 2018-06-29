import React from "react";
import { Switch, Route } from "react-router-dom";

import Browse from "../pages/browse";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Browse} />
        <Route exact path="" />
    </Switch>
);

export default Routes;
