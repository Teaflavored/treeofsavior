import React from "react";
import { IndexRoute, Route } from 'react-router';
import { App,
         Home,
         Login,
         Signup,
         NotFound,
         Builds
            } from  "./components";

export default (store) => {
    //can use store here to check auth state
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/builds" component={Builds}/>
            <Route path="/*" component={NotFound} status={404} />
        </Route>
    );
};
