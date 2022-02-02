import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Student from './pages/Student';
import Addstudent from './pages/Addstudent';
import Editstudent from './pages/Editstudent';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Weather from './pages/Weather';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Student} />
          <Route path="/add-student" component={Addstudent} />
          <Route path="/edit-student/:id" component={Editstudent} />
          <Route path="/home" component={Home} />
          <Route path="/weather" component={Weather} />
      </Switch>
    </Router>
  );
}

export default App;
