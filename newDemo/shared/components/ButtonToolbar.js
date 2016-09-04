import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, RaisedButton } from 'material-ui';

class Layout extends Component {
    render() {
        let { submitting } = this.props;

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

export default Layout;