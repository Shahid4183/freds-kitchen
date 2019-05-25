import React, { Component } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import App from './containers/app'

class Routes extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <App>
                            <Route/>
                        </App>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}
export default Routes;
