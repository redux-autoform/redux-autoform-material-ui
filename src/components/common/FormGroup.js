import React, { Component, PropTypes } from 'react';
import shouldComponentUpdate from '../../util/wrapUpdate';

@shouldComponentUpdate
class FormGroup extends Component {

    getTitle = () => {
        let { displayName, name } = this.props;
        let isDisplayName = (displayName !== undefined && displayName !== null && displayName !== '');

        return (isDisplayName)? displayName : name;
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

	getAddonAfterBlock = () => {
		let { addonAfter } = this.props;

		if (addonAfter) {
			return (
				<div className="pull-right">
					<p style={{ margin: "0px" }}>
						{addonAfter}
					</p>
				</div>
			)
		}

		return null;
	};

	getAddonBeforeBlock = () => {
		let { addonBefore } = this.props;

		if (addonBefore) {
			return (
				<div className="pull-left">
					<p style={{ margin: "0px" }}>
						{addonBefore}
					</p>
				</div>
			)
		}

		return null;
	};

    render() {
        let { children } = this.props;

        return (
            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <div>
                    <h4 style={{ margin: "0px" }}>
                        {this.getTitle()}
                    </h4>
                </div>
                <div>
	                {this.getAddonBeforeBlock()}
	                {children}
	                {this.getAddonAfterBlock()}
                </div>
	            {this.getHelpBlock()}
            </div>
        );
    }
}

FormGroup.propTypes = {
    children: PropTypes.node,
    displayName: PropTypes.string,
    name: PropTypes.string,
	help: PropTypes.string,
	addonAfter: PropTypes.string,
	addonBefore: PropTypes.string
};

export default FormGroup;