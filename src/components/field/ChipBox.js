import React from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip/Chip';

import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

export default class ChipBox extends React.Component {
	static propTypes = propTypes;

	render() {
		let { value, displayName, name, help, addonAfter, addonBefore } = this.props;

		let props = {
			displayName,
			name,
			help,
			addonAfter,
			addonBefore
		};

		return (
			<FormGroup {...props}>
				<Chip>
					{value}
				</Chip>
			</FormGroup>
		);
	}
}