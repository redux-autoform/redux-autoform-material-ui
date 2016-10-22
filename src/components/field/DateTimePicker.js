import React, { Component, PropTypes } from 'react';
import { getDateLocalizer } from 'redux-autoform-utils';
import FormGroup from '../common/FormGroup';
import { DatePicker, TimePicker } from 'material-ui';
import propTypes from '../../util/FieldPropTypes';

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
		let dateString = this.formatDate(date);

		onChange(dateString);
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
			return (value !== '')? this.asDate(value) : null;
		} else {
			return value;
		}
	};

	render() {
		let { name, displayName, help, error, active, touched, onBlur, type, placeholder, addonBefore, addonAfter, required } = this.props;
		let errors = (touched || active)? error : null;

		let props = {
			displayName,
			name,
			help,
			addonBefore,
			addonAfter,
			required
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
							fullWidth
							locale="en-US"
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
							fullWidth
						/>
					</FormGroup>
				);

			default:
				return false;
		}
	}
}

DateTimePicker.propTypes = propTypes;

export default DateTimePicker;