import React, { Component, PropTypes } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Root = ({children, handleSubmit}) => {
    return (
	    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
	        <div className="meta-form">
	            <form onSubmit={handleSubmit}>
	                <div className="container-fluid">
	                    {children}
	                </div>
	            </form>
	        </div>
	    </MuiThemeProvider>
    );
};

Root.propTypes = {
    children: PropTypes.array.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default Root;