import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';

class Routes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
        );
    }
}

export default Routes;
