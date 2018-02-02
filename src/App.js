import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import MainClass from './components/Main';
import Header from './components/Header'
import Movies from './components/Movies'
import Food from './components/Food'
import JokesClass from './components/Jokes'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainClass} />
          <Route path="/Movies" component={Movies} />
          <Route path="/Food" component={Food} />
          <Route path="/Jokes" component={JokesClass} />
        </Switch>
      </BrowserRouter>

      </div>
    );
  }
}

export default App;
