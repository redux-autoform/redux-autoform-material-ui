import React, { Component, PropTypes } from 'react';
import { getDateLocalizer } from 'redux-autoform-utils';
import FormGroup from '../common/FormGroup';
import { DatePicker, TimePicker } from 'material-ui';
import shouldComponentUpdate from '../../util/wrapUpdate';

@shouldComponentUpdate
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
                throw new Error(`Invalid type. Type: ${type}`);
        }
    };

    onChange = (event, date) => {
        let { onChange } = this.props;
        onChange(date);
    };

	formatDate = (date) => {
		let { format, type } = this.props;
		let localizer = getDateLocalizer();

		format = this.getFormat(format, type, localizer.formats);

		return localizer.format(date, format);
	};

	asDate = (dateString) => {
		let { format, type } = this.props;
		let localizer = getDateLocalizer();

		format = this.getFormat(format, type, localizer.formats);

		return localizer.parse(dateString, format);
	};

	parseString = () => {
		let { value } = this.props;

		if (typeof value === 'string') {
			return (value === '')? null : this.asDate(value);
		} else {
			return value;
		}
	};

    render() {
        let { name, displayName, help, error, active, touched, onBlur, type, fieldLayout, placeholder, addonAfter, addonBefore } = this.props;
	    let errors = (touched || active)? error : null;

        let props = {
        	displayName,
	        name,
	        help,
	        addonAfter,
	        addonBefore
        };

	    switch (type) {
		    case 'date':
			    return (
				    <FormGroup {...props}>
					    <DatePicker
						    name={name}
						    value={this.parseString()}
						    mode="landscape"
						    container="inline"
						    errorText={errors}
						    hintText={placeholder}
						    onChange={this.onChange}
						    formatDate={this.formatDate}
						    onBlur={onBlur}
						    type={type}
						    fullWidth
					    />
				    </FormGroup>
			    );

		    case 'time':
			    return (
				    <FormGroup {...props}>
					    <TimePicker
						    format="24hr"
						    name={name}
						    value={this.parseString()}
						    errorText={errors}
						    hintText={placeholder}
						    onChange={this.onChange}
						    onBlur={onBlur}
						    type={type}
						    fullWidth
					    />
				    </FormGroup>
			    );

		    default:
			    return false;
	    }
    }
}

DateTimePicker.propTypes = {

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
	format: PropTypes.string,

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

export default DateTimePicker;