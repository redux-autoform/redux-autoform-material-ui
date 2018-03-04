import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox/Checkbox';
import { getDisplayName } from 'redux-autoform-utils';

import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

const styles = {
	checkbox: {
		marginTop: '0 !important',
		paddingTop: '0 !important',
		marginBottom: '10px !important'
	}
};

export default class CheckBox extends React.Component {
	static propTypes = propTypes;

	getValue = () => {
		let { value } = this.props;

		if (typeof value === 'string') {
			if (value === 'true') {
				return true;
			} else if (value === 'false') {
				return false;
			}

			return false;
		}

		return value;
	};

	render() {
		let { name, displayName, onChange, help, addonAfter, addonBefore, component } = this.props;
		let props = {
			name,
			displayName,
			help,
			addonAfter,
			addonBefore,
			component
		};

		return (
			<FormGroup {...props}>
				<Checkbox
					label={displayName}
					defaultChecked={this.getValue()}
					onCheck={onChange}
					style={styles.checkbox}
				/>
			</FormGroup>
		);
	}
}