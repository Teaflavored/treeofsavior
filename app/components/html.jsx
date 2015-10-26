import React, { Component, PropTypes } from 'react';
import serialize from "serialize-javascript";

export default class Html extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
                	<p>hello, world!!!!</p>
        );
    };
};

Html.propTypes = {
    store: PropTypes.object
                 
};