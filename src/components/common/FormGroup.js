import React, { Component, PropTypes } from 'react';
import shouldComponentUpdate from '../../util/wrapUpdate';

@shouldComponentUpdate
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
    children: PropTypes.node
};

export default FormGroup;