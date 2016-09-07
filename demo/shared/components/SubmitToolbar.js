import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, RaisedButton } from 'material-ui';

class SubmitToolbar extends Component {
    render() {
        let { submitting } = this.props;
        console.info("This are the props " + JSON.stringify(this.props, null, 2));

        return (
            <Toolbar style={{backgroundColor: "#ffffff"}}>
                <ToolbarGroup firstChild/>
                <ToolbarGroup lastChild>
                    <RaisedButton label="Submit" type="submit" disabled={submitting} primary/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default SubmitToolbar;