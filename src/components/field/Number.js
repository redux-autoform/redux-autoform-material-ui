import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField/TextField';

import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

export default class Number extends React.Component {
    static propTypes = propTypes;

    render() {
        let { required, value, error, addonAfter, addonBefore, displayName, help, name, onChange, placeholder, min, max, touched, active, onBlur, maxLength } = this.props;
        let errors = (touched || active) ? error : null;
        let intValue = (value) ? value : min;

        let formGroupProps = {
            displayName,
            name,
            help,
            addonAfter,
            addonBefore,
            required
        };

        return (
            <FormGroup {...formGroupProps}>
                <TextField
                    name={name}
                    value={intValue}
                    errorText={errors}
                    hintText={placeholder}
                    maxLength={maxLength}
                    type="number"
                    min={parseInt(min)}
                    max={parseInt(max)}
                    onChange={onChange}
                    onBlur={onBlur}
                    fullWidth
                />
            </FormGroup>
        );
    }
}