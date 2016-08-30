import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';

//TODO JS we have to emulate the addonBefore and addonAfter
class TextArea extends Component {
    static propTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        displayName: PropTypes.string,
        name: PropTypes.string.isRequired,
        error: PropTypes.string,
        addonBefore: PropTypes.string,
        addonAfter: PropTypes.string,
        fieldLayout: PropTypes.string,
	    rows: PropTypes.number
    };

	static childContextTypes = {
		muiTheme: PropTypes.object.isRequired
	};

    render() {
        let {value, error, displayName, name, onChange, rows, placeholder} = this.props;

        return (
            <TextField
                name={name}
                value={value}
                errorText={error}
                hintText={placeholder}
                floatingLabelText={displayName}
                type="text"
                rows={rows}
                onChange={onChange}
                fullWidth
                multiline
            />
        );
    }
}

export default TextArea;