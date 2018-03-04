import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField/TextField';

import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

export default class TextBox extends React.Component {
	static propTypes = propTypes;

	render() {
		let { required, value, error, displayName, name, onChange, placeholder, touched, active, onBlur, help, addonAfter, addonBefore, maxLength } = this.props;
		let errors = (touched || active) ? error : null;

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
					id={`textField-${name}`}
					name={name}
					value={value}
					errorText={errors}
					maxLength={maxLength}
					hintText={placeholder}
					onChange={onChange}
					onBlur={onBlur}
					type="text"
					fullWidth
				/>
			</FormGroup>
		);
	}
}