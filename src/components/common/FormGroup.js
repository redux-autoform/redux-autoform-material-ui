import React, { Component, PropTypes } from 'react';
import shouldComponentUpdate from '../../util/wrapUpdate';

@shouldComponentUpdate
class FormGroup extends Component {

	getTitleBlock = () => {
		let {displayName, name, component } = this.props;

		switch (component) {
			case "Checkbox":
				return null;
			case "Radio":
				return null;
		}

		if (displayName !== undefined && displayName !== null && displayName !== '') {
			return (
				<h5 style={{ margin: "0px" }}>
					{displayName}
				</h5>
			)
		} else {
			return (
				<h5 style={{ margin: "0px" }}>
					{name}
				</h5>
			)
		}
	};

	getHelpBlock = () => {
		let {help} = this.props;

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
		let {addonBefore} = this.props;

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
		let {addonAfter} = this.props;

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
                <div className="col-md-12">
	                {this.getTitleBlock()}
                </div>
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

FormGroup.propTypes = {

	//Node props
	children: PropTypes.node,

	//String props
	component: PropTypes.string,
    displayName: PropTypes.string,
    name: PropTypes.string,
	help: PropTypes.string,
	addonAfter: PropTypes.string,
	addonBefore: PropTypes.string
};

export default FormGroup;