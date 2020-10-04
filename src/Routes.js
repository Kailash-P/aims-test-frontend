import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function Routes() {
    return (
       <BrowserRouter>
            <Switch>
                <Route exact path="/">                    
                </Route>
            </Switch>
       </BrowserRouter>
    )
}


export default Routes;