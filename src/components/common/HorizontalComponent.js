import React from 'react';
import PropTypes from 'prop-types';

export default class HorizontalComponent extends React.Component {
	static propTypes = {
		children: PropTypes.object,
		size: PropTypes.number.isRequired
	};

	render() {
		return (
			<div className={`col-md-${this.props.size}`}>
				{this.props.children}
			</div>
		)
	}
}