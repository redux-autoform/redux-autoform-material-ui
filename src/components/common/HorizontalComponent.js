import React, { Component, PropTypes } from 'react';

class HorizontalComponent extends Component {
	static propTypes = {
		children: PropTypes.object,
		size: PropTypes.number
	};

	render() {
		let {children} = this.props;

		return (
			<div className={`col-md-${size}`}>
				{children}
			</div>
		)
	}
}

export default HorizontalComponent;