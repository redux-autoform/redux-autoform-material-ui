import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';

//TODO JS we have to emulate the addonBefore and addonAfter
class Password extends Component {
    static propTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        displayName: PropTypes.string,
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
        let {value, error, displayName, name, onChange, placeholder, touched, active} = this.props;
        let errors = null;

        if (touched || active) {
            errors = error;
        }

        return (
            <TextField
                name={name}
                value={value}
                errorText={errors}
                hintText={placeholder}
                floatingLabelText={displayName}
                type="password"
                onChange={onChange}
                fullWidth
            />
        );
    }
}

export default Password;