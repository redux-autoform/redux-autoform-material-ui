import React, { Component, PropTypes } from 'react';
import FormGroup from '../common/FormGroup';
import { TextField } from 'material-ui';

class Static extends Component {

    render() {
        let { value, name, displayName, help, error, touched, active, addonBefore, addonAfter } = this.props;
        let errors = (touched || active)? error : null;
        let props = {
            displayName,
            name,
            help,
            addonAfter,
            addonBefore
        };

        return (
            <FormGroup {...props}>
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

Static.propTypes = {

    //Any props
    value: PropTypes.any,

    //Bool props
    checked: PropTypes.bool,
    valid: PropTypes.bool,
    invalid: PropTypes.bool,
    dirty: PropTypes.bool,
    pristine: PropTypes.bool,
    active: PropTypes.bool,
    touched: PropTypes.bool,
    visited: PropTypes.bool,
    autofilled: PropTypes.bool,
    required: PropTypes.bool,

    //String props
    addonAfter: PropTypes.string,
    addonBefore: PropTypes.string,
    component: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string,
    displayName: PropTypes.string,
    initialValue: PropTypes.string,
    fieldLayout: PropTypes.string,

    //Function props
    autofill: PropTypes.func,
    onBlur: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    onUpdate: PropTypes.func,
    onChange: PropTypes.func,

    //Object props
    componentFactory: PropTypes.object,
    reduxFormProps: PropTypes.object,
    _extra: PropTypes.object
};

export default Static;