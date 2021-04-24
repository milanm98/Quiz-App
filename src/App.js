import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from  "./Components/NavBar";
import React from 'react';
import Q1 from "./Components/Q1";
import Q2 from "./Components/Q2";
import Q3 from "./Components/Q3";
import Q4 from "./Components/Q4";
import Q5 from "./Components/Q5";

function App() {
  return (
    <main className="background w-screen h-screen">
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route component={Q1} path="/q1"></Route>
                <Route component={Q2} path="/q2"></Route>
                <Route component={Q3} path="/q3"></Route>
                <Route component={Q4} path="/q4"></Route>
                <Route component={Q5} path="/q5"></Route>
            </Switch>
        </BrowserRouter>
    </main>
  );
}

export default App;
