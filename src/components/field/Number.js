import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';
import FormGroup from '../common/FormGroup';

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

    render() {
        let { value, error, displayName, name, onChange, placeholder, min, max, touched, active, onBlur } = this.props;
	    let errors = (touched || active)? error : null;

        console.info("TextBox - This are the props => " + JSON.stringify(Object.keys(this.props), null, 2));

        return (
            <FormGroup>
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
                    onBlur={onBlur}
                    fullWidth
                />
            </FormGroup>
		);
    }
}

export default TextBox;