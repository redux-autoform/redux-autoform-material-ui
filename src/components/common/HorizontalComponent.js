import React, { Component, PropTypes } from 'react';
import shouldComponentUpdate from '../../util/wrapUpdate';

@shouldComponentUpdate
class HorizontalComponent extends Component {
	render() {
		let {children, size} = this.props;

		return (
			<div className={`col-md-${size}`}>
				{children}
			</div>
		)
	}
}

HorizontalComponent.propTypes = {
	children: PropTypes.object,
	size: PropTypes.number.isRequired
};

export default HorizontalComponent;