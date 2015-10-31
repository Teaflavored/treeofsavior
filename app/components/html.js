import React, { Component, PropTypes } from 'react';
import ReactDOM from "react-dom/server";
import serialize from "serialize-javascript";

export default class Html extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const component = this.props.component;
        const assets = this.props.assets;

        const content = component ? ReactDOM.renderToString(component) : '';
        return (
            <html lang="en-us">
                <head>
                    <title>Tree of Savior</title>
                    {Object.keys(assets.styles).map((style, key) =>
                            <link href={assets.styles[style]} key={key} media="screen, projection"
                                  rel="stylesheet" type="text/css" charSet="UTF-8"/>
                    )}
                </head>
                <body>
                    <div id="root" dangerouslySetInnerHTML={{__html: content}}></div>
                    <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(this.props.store.getState())};window.__baseUrl="${process.env.BASE_URL}"`}} charSet="UTF-8"/>
                    <script src={ assets.javascript.main }></script>
                </body>
            </html>
        );
    };
};

Html.propTypes = {
    assets: PropTypes.object,
    store: PropTypes.object,
    component: PropTypes.node
};