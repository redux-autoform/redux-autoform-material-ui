import React, { Component, PropTypes } from 'react';

class FormGroup extends Component {

    render() {
        let { children } = this.props;

        return (
            <div>
                { children }
            </div>
        );
    }
}

FormGroup.propTypes = {
    children: PropTypes.node.isRequired
};

export default FormGroup;