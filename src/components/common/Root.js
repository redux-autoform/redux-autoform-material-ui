import React, { Component, PropTypes } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Root extends Component {

    render() {
        let { handleSubmit, children } = this.props;

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className="meta-form">
                    <form onSubmit={handleSubmit}>
                        {children}
                    </form>
                </div>
            </MuiThemeProvider>
        );
    }
}

Root.propTypes = {
    children: PropTypes.array,
    handleSubmit: PropTypes.func.isRequired
};

export default Root;