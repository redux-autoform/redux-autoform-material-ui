import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';
import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

class Email extends Component {

    render() {
        let {required, value, error, displayName, name, onChange, placeholder, touched, active, onBlur, addonBefore, addonAfter, help} = this.props;
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
                    type="email"
                    onChange={onChange}
                    onBlur={onBlur}
                    fullWidth
                />
            </FormGroup>
        );
    }
}

Email.propTypes = propTypes;

export default Email;