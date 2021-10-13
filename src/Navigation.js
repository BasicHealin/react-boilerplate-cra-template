import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
