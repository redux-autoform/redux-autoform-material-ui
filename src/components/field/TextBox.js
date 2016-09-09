import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';
import FormGroup from '../common/FormGroup';

class TextBox extends Component {

    render() {
        let { value, error, displayName, name, onChange, placeholder, touched, active, onBlur } = this.props;
	    let errors = (touched || active)? error : null;

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

	//Any props
	value: PropTypes.any,

	//Bool props
	checked: PropTypes.bool,
	valid: PropTypes.bool.isRequired,
	invalid: PropTypes.bool.isRequired,
	dirty: PropTypes.bool.isRequired,
	pristine: PropTypes.bool.isRequired,
	active: PropTypes.bool.isRequired,
	touched: PropTypes.bool.isRequired,
	visited: PropTypes.bool.isRequired,
	autofilled: PropTypes.bool.isRequired,
	required: PropTypes.bool.isRequired,

	//String props
	placeholder: PropTypes.string,
	name: PropTypes.string.isRequired,
	error: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	displayName: PropTypes.string.isRequired,
	initialValue: PropTypes.string.isRequired,
	fieldLayout: PropTypes.string.isRequired,

	//Function props
	autofill: PropTypes.func.isRequired,
	onBlur: PropTypes.func.isRequired,
	onDragStart: PropTypes.func.isRequired,
	onDrop: PropTypes.func.isRequired,
	onFocus: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,

	//Object props
	componentFactory: PropTypes.object.isRequired,
	reduxFormProps: PropTypes.object.isRequired,
	_extra: PropTypes.object.isRequired
};

export default TextBox;