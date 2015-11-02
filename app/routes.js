import React from "react";
import { IndexRoute, Route } from 'react-router';
import {
        App,
        Home,
        Login,
        Signup,
        NotFound,
        Skills,
        AllSkills,
        NewSkill,
        ShowSkill,
        Builds
            } from  "./components/index.js";

export default (store) => {
    //can use store here to check auth state
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/builds" component={Builds}/>
            <Route path="/skills" component={Skills}>
                <Route path="/skills/new" component={NewSkill} />
                <Route path="/skills/:id" component={ShowSkill} />
                <IndexRoute component={AllSkills}/>
            </Route>
            <Route path="/*" component={NotFound} status={404} />
        </Route>
    );
};
