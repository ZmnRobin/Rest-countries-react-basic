import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import DetailInfo from './Components/DetailInfo/DetailInfo';

function App() {
  return (
    <Router>
      < Switch>
      <Route path="/home">
        <Home/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/DetailInfo/:alpha3Code">
      <DetailInfo/>
      </Route>
      <Route path="*">
      <NotFound/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
