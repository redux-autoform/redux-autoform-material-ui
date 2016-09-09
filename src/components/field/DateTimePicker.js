import React, { Component, PropTypes } from 'react';
import { getDateLocalizer } from 'redux-autoform-utils';
import FormGroup from '../common/FormGroup';
import { DatePicker, TimePicker, TextField } from 'material-ui';

class DateTimePicker extends Component {

    getFormat = (format, type, formats) => {
        if (!type) {
            throw Error('\'type\' should be truthy');
        }

        if (!formats) {
            throw Error('\'localizer\' should be truthy');
        }

        if (format) {
            return format;
        }

        switch(type) {
            case 'datetime':
                return formats.default;
            case 'date':
                return formats.date;
            case 'time':
                return formats.time;
            default:
                throw Error(`Invalid type. Type: ${type}`);
        }
    };

    setReactWidgetsProps = (props, type) => {
        if (!props) {
            throw Error('\'props\' should be truthy');
        }

        if (!type) {
            throw Error('\'type\' should be truthy');
        }

        switch(type) {
            case 'time':
                props.calendar = false;
                break;
            case 'date':
                props.time = false;
                break;
        }
    };

    onChange = (date, dateAsString) => {
        let { onChange } = this.props;
        onChange(dateAsString);
    };

    render() {
        let { value, name, displayName, help, error, active, touched, onBlur, format, type, fieldLayout, placeholder } = this.props;
	    let errors = (touched || active)? error : null;
	    let localizer = getDateLocalizer();

        if (typeof value == 'string') {
            if(value == '') {
                value = undefined;
            } else {
                format = this.getFormat(format, type, localizer.formats);
                value = localizer.parse(value, format);
            }
        }

        let reactWidgetsProps = { value, displayName, onChange: this.onChange, onBlur, format };
        let formGroupProps = { error, touched, displayName, name, help, fieldLayout };

        this.setReactWidgetsProps(reactWidgetsProps, type);

        return (
            <FormGroup>
                <TextField
	                name={name}
	                value={value}
	                errorText={errors}
	                hintText={placeholder}
	                floatingLabelText={displayName}
	                onChange={this.onChange}
	                onBlur={onBlur}
	                fullWidth
	                type={type}
                />
            </FormGroup>
        );
    }
}

DateTimePicker.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    displayName: PropTypes.string,
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    format: PropTypes.string
};

export default DateTimePicker;