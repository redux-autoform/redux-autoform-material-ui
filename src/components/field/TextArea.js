import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField/TextField';

import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

export default class TextArea extends React.Component {
    static propTypes = propTypes;

    render() {
        let { value, required, error, displayName, name, onChange, rows, placeholder, touched, active, onBlur, help, addonAfter, addonBefore, maxLength } = this.props;
        let errors = (touched || active) ? error : null;
        let props = {
            displayName,
            name,
            help,
            addonAfter,
            addonBefore,
            required
        };

        return (
            <FormGroup {...props}>
                <TextField
                    name={name}
                    value={value}
                    errorText={errors}
                    hintText={placeholder}
                    maxLength={maxLength}
                    type="text"
                    rows={rows}
                    onChange={onChange}
                    onBlur={onBlur}
                    fullWidth
                />
            </FormGroup>
        );
    }
}