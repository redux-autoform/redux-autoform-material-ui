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
	valid: PropTypes.bool,
	invalid: PropTypes.bool,
	dirty: PropTypes.bool,
	pristine: PropTypes.bool,
	active: PropTypes.bool,
	touched: PropTypes.bool,
	visited: PropTypes.bool,
	autofilled: PropTypes.bool,
	required: PropTypes.bool,

	//String props
	component: PropTypes.string,
	placeholder: PropTypes.string,
	name: PropTypes.string,
	error: PropTypes.string,
	type: PropTypes.string,
	displayName: PropTypes.string,
	initialValue: PropTypes.string,
	fieldLayout: PropTypes.string,

	//Function props
	autofill: PropTypes.func,
	onBlur: PropTypes.func,
	onDragStart: PropTypes.func,
	onDrop: PropTypes.func,
	onFocus: PropTypes.func,
	onUpdate: PropTypes.func,
	onChange: PropTypes.func,

	//Object props
	componentFactory: PropTypes.object,
	reduxFormProps: PropTypes.object,
	_extra: PropTypes.object
};

export default TextBox;