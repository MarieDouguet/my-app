import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Incidents from './pages/Incidents';
import Signatures from './pages/Signatures';


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/incidents" exact component={Incidents} />
        <Route path="/incidents/:signatureId" exact component={Signatures}/>
        <Route component={NotFound} />
      </Switch>

    </BrowserRouter>
  );
};
export default App;

