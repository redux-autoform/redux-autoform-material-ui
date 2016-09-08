import React, { Component, PropTypes } from 'react';

class FormGroup extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        let { children } = this.props;

        return (
            <div>
                { children }
            </div>
        );
    }
}

export default FormGroup;