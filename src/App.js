import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dnd from './projects/Dnd'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-me" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact-me" component={Contact} />
          <Route path="/drag-and-drop-project" component={Dnd} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
