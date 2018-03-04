import React from 'react';
import PropTypes from 'prop-types';

export default class VerticalComponent extends React.Component {
	static propTypes = {
		children: PropTypes.object,
		size: PropTypes.number.isRequired
	};

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className={`col-md-${this.props.size}`}>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}