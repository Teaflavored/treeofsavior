import React from "react";
import { IndexRoute, Route } from 'react-router';
import { App,
         Home,
         Login,
         NotFound
            } from  "./components";

export default (store) => {
    //can use store here to check auth state
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/login" component={Login}/>
        </Route>
    );


    //<Route path="/*" component={NotFound} status={404} />
};
