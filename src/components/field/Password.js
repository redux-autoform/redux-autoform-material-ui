import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';
import FormGroup from '../common/FormGroup';

//TODO JS we have to emulate the addonBefore and addonAfter
class Password extends Component {
    static propTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        displayName: PropTypes.string,
        name: PropTypes.string.isRequired,
        error: PropTypes.string,
        fieldLayout: PropTypes.string
    };

    render() {
        let {value, error, displayName, name, onChange, placeholder, touched, active, onBlur} = this.props;
        let errors = (touched || active)? error : null;

        return (
            <FormGroup>
                <TextField
                    name={name}
                    value={value}
                    errorText={errors}
                    hintText={placeholder}
                    floatingLabelText={displayName}
                    type="password"
                    onChange={onChange}
                    onBlur={onBlur}
                    fullWidth
                />
            </FormGroup>
        );
    }
}

export default Password;