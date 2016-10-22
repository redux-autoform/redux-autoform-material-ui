import React, { Component, PropTypes } from 'react';
import { getDisplayName } from 'redux-autoform-utils';
import Checkbox from 'material-ui/Checkbox';
import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

const styles = {
    checkbox: {
        marginTop: '0 !important',
        paddingTop: '0 !important',
        marginBottom: '10px !important'
    }
};

class CheckBox extends Component {

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

CheckBox.propTypes = propTypes;

export default CheckBox;