import React, { Component, PropTypes } from 'react';

export default class Html extends Component {
    render() {
        return (
            <html lang="en-us">
                <head>
                    <title>Tree of Savior</title>
                </head>
                <body>
                    <script src="/javascripts/main.js"></script>
                </body>
            </html>
        );
    }
};