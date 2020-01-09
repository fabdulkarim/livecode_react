import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"

import PageHome from "../pages/home"
import PageCategory from "../pages/category"
import PageLogin from "../pages/login"
import PageProfile from "../pages/profile"

import { store } from "../store"
import { Provider } from "unistore/react"

const MainRoute = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PageHome} />
                    <Route exact path="/login" component={PageLogin} />
                    <Route exact path="/profile" component={PageProfile} />

                    {/* <Route exact path="/signin" component={PageSignIn}/>
                    <Route exact path="/profile" component={PageProfile} /> */}
                    <Route path="/:cat" component={PageCategory} />
                </Switch>
            </BrowserRouter>
        </Provider>
        
    )
}

export default MainRoute;