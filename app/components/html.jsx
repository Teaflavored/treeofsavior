import React, { Component, PropTypes } from 'react';
import serialize from "serialize-javascript";

export default class Html extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <html lang="en-us">
                <head>
                    <title>Tree of Savior</title>
                </head>
                <body>
                    <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(this.props.store.getState())};`}} charSet="UTF-8"/>
                    <script src="/javascripts/main.js"></script>
                </body>
            </html>
        );
    };
};

Html.propTypes = {
    store: PropTypes.object
                  
                );
    }
};