import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import AboutMe from './components/AboutMe';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about-me" component={AboutMe} />
    </Switch>
);

export default Routes;
