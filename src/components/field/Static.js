import React, { Component, PropTypes } from 'react';
import FormGroup from '../common/FormGroup';
import { TextField } from 'material-ui';
import propTypes from '../../util/FieldPropTypes';

class Static extends Component {
    render() {
        let { value, name, displayName, help, error, touched, active, addonBefore, addonAfter } = this.props;
        let errors = (touched || active)? error : null;
        let props = {
            displayName,
            name,
            help,
            addonAfter,
            addonBefore
        };

        return (
            <FormGroup {...props}>
                <TextField
                    name={name}
                    value={value}
                    errorText={errors}
                    type="text"
                    fullWidth
                    disabled
                />
            </FormGroup>
        )
    }
}

Static.propTypes = propTypes;

export default Static;