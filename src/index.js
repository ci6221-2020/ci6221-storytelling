import React from 'react';
import {render} from 'react-dom';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import Timeline from './timeline/Timeline';
import Prelude from './prelude/Prelude';
import CircuitBreaker from './circuitbreaker/CircuitBreaker';
import Phase1 from './phase1/Phase1';
import Phase2 from './phase2/Phase2';

const Content = () => {
    return (
        <Switch>
            <Route component={Timeline} exact path="/" />
            <Route component={Prelude} path="/prelude" />
            <Route component={CircuitBreaker} path="/circuitbreaker" />
            <Route component={Phase1} path="/phase1" />
            <Route component={Phase2} path="/phase2" />
        </Switch>
    );
}

render(<BrowserRouter><Content /></BrowserRouter>, document.getElementById('content'));