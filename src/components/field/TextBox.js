import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';
import FormGroup from '../common/FormGroup';

//TODO JS we have to emulate the addonBefore and addonAfter
class TextBox extends Component {

    render() {
        let { value, error, displayName, name, onChange, placeholder, touched, active, onBlur } = this.props;
	    let errors = (touched || active)? error : null;

		console.info("TextBox - This are the props => " + JSON.stringify(Object.keys(this.props), null, 2));

	    return (
	    	<FormGroup>
				<TextField
					name={name}
					value={value}
					errorText={errors}
					hintText={placeholder}
					floatingLabelText={displayName}
					type="text"
					onChange={onChange}
					onBlur={onBlur}
					fullWidth
				/>
			</FormGroup>
	    );
	}
}

TextBox.propTypes = {
	value: PropTypes.any,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	displayName: PropTypes.string,
	name: PropTypes.string.isRequired,
	error: PropTypes.string,
	fieldLayout: PropTypes.string
};

export default TextBox;