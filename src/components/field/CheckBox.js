import React, { Component, PropTypes } from 'react';
import { getDisplayName } from 'redux-autoform-utils';
import Checkbox from 'material-ui/Checkbox';
import FormGroup from '../common/FormGroup';
import shouldComponentUpdate from '../../util/wrapUpdate';

const styles = {
    checkbox: {
        marginTop: '0 !important',
        paddingTop: '0 !important',
        marginBottom: '10px !important'
    }
};

@shouldComponentUpdate
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
        let { name, displayName, onChange, onBlur, fieldLayout, error, touched, help, addonAfter, addonBefore, component } = this.props;
	    // let validationState = error && touched ? 'error' : null;
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
					onChange={onChange}
					onBlur={onBlur}
					style={styles.checkbox}
				/>
			</FormGroup>
		);
    }
}

CheckBox.propTypes = {

	//Any props
	value: PropTypes.any,

	//Bool props
	checked: PropTypes.bool,
	defaultChecked: PropTypes.bool,
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
	addonBefore: PropTypes.string,
	addonAfter: PropTypes.string,
	help: PropTypes.string,
	error: PropTypes.string,
	component: PropTypes.string,
	placeholder: PropTypes.string,
	name: PropTypes.string,
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

export default CheckBox;