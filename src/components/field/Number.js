import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';

//TODO JS we have to emulate the addonBefore and addonAfter
class TextBox extends Component {
    static propTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string, displayName: PropTypes.string,
        name: PropTypes.string.isRequired,
        error: PropTypes.string,
        fieldLayout: PropTypes.string,
        min: PropTypes.number,
        max: PropTypes.number
    };

    static childContextTypes = {
        muiTheme: PropTypes.object.isRequired
    };

    render() {
        let { value, error, displayName, name, onChange, placeholder, min, max, touched, active } = this.props;
	    let errors = (touched || active)? error : null;

        return (
			<TextField
				name={name}
				value={min || value}
				errorText={errors}
				hintText={placeholder}
				floatingLabelText={displayName}
				type="number"
                min={min}
                max={max}
				onChange={onChange}
				fullWidth
			/>
		);
    }
}

export default TextBox;