import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Country/Home/Home';
import NoMatch from './Components/Country/NoMatch/NoMatch';
import CountryDetail from './Components/CountryDetail/CountryDetail';


function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/country/:name">
              <CountryDetail></CountryDetail>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
