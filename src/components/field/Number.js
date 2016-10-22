import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';
import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

class Number extends Component {
    render() {
        let { required, value, error, addonAfter, addonBefore, displayName, help, name, onChange, placeholder, min, max, touched, active, onBlur } = this.props;
	    let errors = (touched || active)? error : null;
		let intValue = (value)? value : min;

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
                    value={intValue}
                    errorText={errors}
                    hintText={placeholder}
                    type="number"
                    min={parseInt(min)}
                    max={parseInt(max)}
                    onChange={onChange}
                    onBlur={onBlur}
                    fullWidth
                />
            </FormGroup>
		);
    }
}

Number.propTypes = propTypes;

export default Number;