import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Manage from './Components/Manage/Manage';
import Review from './Components/Review/Review';
function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/shop">
          <Home />
        </Route>

        <Route path="/review">
          <Review />
        </Route>


        <Route path="/manage">
          <Manage />
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
