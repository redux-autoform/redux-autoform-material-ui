import React, { Component, PropTypes } from 'react';
import {TextField} from 'material-ui';

//TODO JS we have to emulate the addonBefore and addonAfter
class Email extends Component {
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
                type="email"
                onChange={onChange}
                fullWidth
            />
        );
    }
}

export default Email;