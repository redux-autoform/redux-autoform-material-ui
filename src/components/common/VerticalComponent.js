import React, { Component, PropTypes } from 'react';

class VerticalComponent extends Component {
	static propTypes = {
		children: PropTypes.object,
		size: PropTypes.number
	};

	render() {
		let {children} = this.props;

		return (
			<div className="container-fluid">
				<div className="row">
					<div className={`col-md-${size}`}>
						{children}
					</div>
				</div>
			</div>
		)
	}
}

export default VerticalComponent;