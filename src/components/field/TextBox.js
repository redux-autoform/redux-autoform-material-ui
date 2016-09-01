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
        addonBefore: PropTypes.string,
        addonAfter: PropTypes.string,
        fieldLayout: PropTypes.string
    };

    static childContextTypes = {
        muiTheme: PropTypes.object.isRequired
    };

    render() {
        let {value, error, displayName, name, onChange, placeholder, addonBefore, addonAfter} = this.props;
        let before = null, after = null, textField = "col-md-12";

	    if (addonBefore) {
		    textField = "col-md-8";
			before = (
				<div className="col-md-4">
					<p className="center-block">{addonBefore}</p>
				</div>
			)
	    }

	    if (addonAfter) {
		    textField = "col-md-8";
		    after = (
			    <div className="col-md-4">
				    <p className="center-block">{addonAfter}</p>
			    </div>
		    )
	    }

        return (
			<TextField
				name={name}
				value={value}
				errorText={error}
				hintText={placeholder}
				floatingLabelText={displayName}
				type="text"
				onChange={onChange}
				fullWidth
			/>
		);
    }
}

export default TextBox;