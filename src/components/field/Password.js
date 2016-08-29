import React, { Component, PropTypes } from 'react';

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

    render() {
        let {value, error, displayName, name, onChange} = this.props;

        return (
            <TextField
                name={name}
                value={value}
                errorText={error}
                floatingLabelText={displayName}
                type="password"
                onChange={onChange}
                fullWidth
            />
        );
    }
}

export default Password;