import React, { Component, PropTypes } from 'react';
import shouldComponentUpdate from '../../util/wrapUpdate';

@shouldComponentUpdate
class VerticalComponent extends Component {

	render() {
		let {children, size} = this.props;

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

VerticalComponent.propTypes = {
	children: PropTypes.object.isRequired,
	size: PropTypes.number.isRequired
};

export default VerticalComponent;