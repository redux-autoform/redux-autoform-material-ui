import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';
import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

class TextBox extends Component {

    render() {
        let { required, value, error, displayName, name, onChange, placeholder, touched, active, onBlur, help, addonAfter, addonBefore } = this.props;
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
					id={`textField-${name}`}
					name={name}
					value={value}
					errorText={errors}
					hintText={placeholder}
					onChange={onChange}
					onBlur={onBlur}
					type="text"
					fullWidth
				/>
			</FormGroup>
	    );
	}
}

TextBox.propTypes = propTypes;

export default TextBox;