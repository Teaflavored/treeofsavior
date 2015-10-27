import React, { Component, PropTypes } from 'react';
import ReactDOM from "react-dom/server";
import serialize from "serialize-javascript";

export default class Html extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const component = this.props.component;
        const content = component ? ReactDOM.renderToString(component) : '';
        return (
            <html lang="en-us">
                <head>
                    <title>Tree of Savior</title>
                </head>
                <body>
                    <div id="root" dangerouslySetInnerHTML={{__html: content}}></div>
                    <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(this.props.store.getState())};`}} charSet="UTF-8"/>
                    <script src="/javascripts/main.js"></script>
                </body>
            </html>
        );
    };
};

Html.propTypes = {
    store: PropTypes.object,
    component: PropTypes.node
};