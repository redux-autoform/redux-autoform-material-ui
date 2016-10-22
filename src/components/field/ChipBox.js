import React, { Component, PropTypes } from 'react';
import { Chip } from 'material-ui';
import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

class ChipBox extends Component {
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

ChipBox.propTypes = propTypes;

export default ChipBox;