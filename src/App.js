// IMPORT MODULES
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// IMPORT PAGES
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
