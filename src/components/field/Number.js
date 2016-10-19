import React, { Component, PropTypes } from 'react';
import { TextField } from 'material-ui';
import FormGroup from '../common/FormGroup';

class Number extends Component {

    render() {
        let { required, value, error, addonAfter, addonBefore, displayName, help, name, onChange, placeholder, min, max, touched, active, onBlur } = this.props;
	    let errors = (touched || active)? error : null;
		let intValue = (value)? value : min;

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
                    value={intValue}
                    errorText={errors}
                    hintText={placeholder}
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

Number.propTypes = {

    //Number props
    min: PropTypes.number,
    max: PropTypes.number,

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

export default Number;