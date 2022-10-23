import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nodes from "../containers/Nodes";
import NotFoundPage from "./NotFoundPage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Nodes} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
