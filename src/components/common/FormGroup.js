import React from 'react';
import PropTypes from 'prop-types';

export default class FormGroup extends React.Component {
	static propTypes = {
		//Node props
		children: PropTypes.node,
		//String props
		component: PropTypes.string,
		displayName: PropTypes.string,
		name: PropTypes.string,
		help: PropTypes.string,
		addonAfter: PropTypes.string,
		addonBefore: PropTypes.string,
		required: PropTypes.bool
	};

	getTitleBlock = () => {
		let { displayName, name, component, required } = this.props;

		switch (component) {
			case "Checkbox":
				return null;
			case "Radio":
				return null;
		}

		let requiredStar = null;

		if (required) {
			requiredStar = '*';
		}

		const style = {
			padding: "0px",
			margin: "0px"
		};

		if (displayName !== undefined && displayName !== null && displayName !== '') {
			return (
				<div>
					<h5 style={style}>{`${displayName} `}<b style={{ color: 'red' }}>{requiredStar}</b></h5>
				</div>
			)
		} else {
			return (
				<div>
					<h5 style={style}>{`${name} `}<b style={{ color: 'red' }}>{requiredStar}</b></h5>
				</div>
			)
		}
	};

	getHelpBlock = () => {
		let { help } = this.props;

		if (help) {
			return (
				<div style={{ color: "#757575" }}>
					<b>{help}</b>
				</div>
			)
		}

		return null;
	};

	getAddonBeforeBlock = () => {
		let { addonBefore } = this.props;

		if (addonBefore) {
			return (
				<div className="col-md-3 pull-left" style={{ textAlign: "left", marginTop: "15px", padding: "0px" }}>
					<p style={{ margin: "0px" }}>
						{addonBefore}
					</p>
				</div>
			)
		}

		return null;
	};

	getAddonAfterBlock = () => {
		let { addonAfter } = this.props;

		if (addonAfter) {
			return (
				<div className="col-md-3 pull-right" style={{ textAlign: "right", marginTop: "15px", padding: "0px" }}>
					<p style={{ margin: "0px" }}>
						{addonAfter}
					</p>
				</div>
			)
		}

		return null;
	};

	getChildrenBlock = () => {
		let { children, addonAfter, addonBefore } = this.props;

		if (addonAfter || addonBefore) {
			return (
				<div className="col-md-9" style={{ margin: "0px", padding: "0px" }}>
					{children}
				</div>
			);
		}

		return children;
	};

	render() {
		return (
			<div style={{ marginTop: "10px", marginBottom: "10px" }}>
				{this.getTitleBlock()}
				<div>
					{this.getAddonBeforeBlock()}
					{this.getChildrenBlock()}
					{this.getAddonAfterBlock()}
				</div>
				{this.getHelpBlock()}
			</div>
		);
	}
}