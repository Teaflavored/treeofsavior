import React, { Component, PropTypes } from "react"

class Skill extends Component {
    render() {
        return (
            <div id="skills">
                { this.props.children }
            </div>
        );
    }
}

export default Skill;