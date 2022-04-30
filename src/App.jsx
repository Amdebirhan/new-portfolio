import React from 'react'
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllPortfolio from './components/portfolio/allPortfolio/AllPortfolio';

import Details from './components/details/Details';

const App = () => {
    return (
        <>

            <Router>
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/all-portfolio" exact>
                        <AllPortfolio />
                    </Route>
                    <Route path={"/details/:id"} component={Details}></Route>
                </Switch>
            </Router>

        </>
    )
}

export default App