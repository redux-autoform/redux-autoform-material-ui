import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField/TextField';

import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

export default class Static extends React.Component {
    static propTypes = propTypes;

    render() {
        let { value, name, displayName, help, error, touched, active, addonBefore, addonAfter } = this.props;
        let errors = (touched || active) ? error : null;
        let formGroupProps = {
            displayName,
            name,
            help,
            addonAfter,
            addonBefore
        };

        return (
            <FormGroup {...formGroupProps}>
                <TextField
                    name={name}
                    value={value}
                    errorText={errors}
                    type="text"
                    fullWidth
                    disabled
                />
            </FormGroup>
        )
    }
}