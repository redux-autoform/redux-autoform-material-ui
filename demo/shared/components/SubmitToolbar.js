import React, { Component, PropTypes } from 'react';
import { Toolbar, ToolbarGroup, RaisedButton } from 'material-ui';

class SubmitToolbar extends Component {
	static propTypes = {
		pristine: PropTypes.bool.isRequired,
		submitting: PropTypes.bool.isRequired,
		errors: PropTypes.array.isRequired
	};
	
	render() {
	    let { pristine, submitting, errors } = this.props;
	    let disabled = !!(pristine || errors.length > 0 || submitting);

        return (
            <Toolbar style={{backgroundColor: "#ffffff"}}>
                <ToolbarGroup firstChild/>
                <ToolbarGroup lastChild>
                    <RaisedButton label="Submit" type="submit" disabled={disabled} primary/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default SubmitToolbar;