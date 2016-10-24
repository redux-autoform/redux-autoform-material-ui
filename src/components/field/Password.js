import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';
import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

class Password extends Component {
    render() {
        let {value, required, error, displayName, name, onChange, placeholder, touched, active, onBlur, help, addonAfter, addonBefore, maxLength} = this.props;
        let errors = (touched || active)? error : null;

        let props = {
            displayName,
            name,
            help,
            addonAfter,
            addonBefore,
	        required
        };

        return (
            <FormGroup {...props}>
                <TextField
                    name={name}
                    value={value}
                    errorText={errors}
                    hintText={placeholder}
                    maxLength={maxLength}
                    type="password"
                    onChange={onChange}
                    onBlur={onBlur}
                    fullWidth
                />
            </FormGroup>
        );
    }
}

Password.propTypes = propTypes;

export default Password;