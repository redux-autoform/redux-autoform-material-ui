import React, { Component, PropTypes } from 'react';
import { getDisplayName } from 'redux-autoform-utils';
import Checkbox from 'material-ui/Checkbox';
import FormGroup from '../common/FormGroup';

//TODO JS: delete this and move to css
const styles = {
    checkbox: {
        marginTop: '0 !important',
        paddingTop: '0 !important',
        marginBottom: '10px !important'
    }
};

class CheckBox extends Component {

    render() {
        let { value, name, displayName, onChange, onBlur, fieldLayout, defaultChecked, error, touched } = this.props;
	    // let validationState = error && touched ? 'error' : null;

	    if (defaultChecked === true || value === true) {
		    value = true;
	    }

		console.info("CheckBox - This are the props => " + JSON.stringify(Object.keys(this.props), null, 2));

		return (
			<FormGroup>
				<Checkbox
					label={getDisplayName(displayName, name)}
					defaultChecked={value}
					onChange={onChange}
					onBlur={onBlur}
					style={styles.checkbox}
				/>
			</FormGroup>
		);
    }
}

CheckBox.propTypes = {
	value: PropTypes.any,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	displayName: PropTypes.string,
	name: PropTypes.string.isRequired,
	error: PropTypes.string,
	fieldLayout: PropTypes.string,
	defaultChecked: PropTypes.bool
};

export default CheckBox;