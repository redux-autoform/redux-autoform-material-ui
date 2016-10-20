import React, { Component, PropTypes } from 'react';

class Root extends Component {

    render() {
        let { handleSubmit, children } = this.props;

        return (
	        <div className="meta-form">
		        <form onSubmit={handleSubmit}>
			        {children}
		        </form>
	        </div>
        );
    }
}

Root.propTypes = {
    children: PropTypes.array,
    handleSubmit: PropTypes.func.isRequired
};

export default Root;