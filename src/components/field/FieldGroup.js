import React, { Component, PropTypes } from 'react';
import FormGroup from '../common/FormGroup';

class FieldGroup extends Component {

    getGroupContent = () => {
        let { componentFactory, _extra: { layout, fields }, group: groupName } = this.props;
        let group = layout.groups.find(g => g.name == groupName);
        let groupProps = {
            component: group.component,
            layout: group,
            fields,
            componentFactory
        };

        if (!group) {
            throw Error(`Could not find group. Group: ${groupName}`);
        }

        return componentFactory.buildGroupComponent(groupProps);
    };

    render() {
        // let { value, placeholder, addonBefore, addonAfter, onChange, onBlur, componentClass, children, rows, // textarea only,};
        let { name, displayName, help, error, touched, fieldLayout, innerSize } = this.props;
        let formGroupProps = { error, touched, displayName, name, help, fieldLayout, innerSize };

        return (
            <FormGroup>
                {this.getGroupContent()}
            </FormGroup>
        );
    }
}

FieldGroup.propTypes = {

	//Number props
	innerSize: PropTypes.number,

	//Any props
	value: PropTypes.any,
	options: PropTypes.any,

	//Bool props
	checked: PropTypes.bool,
	valid: PropTypes.bool,
	invalid: PropTypes.bool,
	dirty: PropTypes.bool,
	pristine: PropTypes.bool,
	active: PropTypes.bool,
	touched: PropTypes.bool,
	visited: PropTypes.bool,
	autofilled: PropTypes.bool,
	required: PropTypes.bool,

	//String props
	group: PropTypes.string,
	addonBefore: PropTypes.string,
	addonAfter: PropTypes.string,
	component: PropTypes.string,
	help: PropTypes.string,
	placeholder: PropTypes.string,
	name: PropTypes.string,
	error: PropTypes.string,
	type: PropTypes.string,
	displayName: PropTypes.string,
	initialValue: PropTypes.string,
	fieldLayout: PropTypes.string,

	//Function props
	autofill: PropTypes.func,
	onBlur: PropTypes.func,
	onDragStart: PropTypes.func,
	onDrop: PropTypes.func,
	onFocus: PropTypes.func,
	onUpdate: PropTypes.func,
	onChange: PropTypes.func,

	//Object props
	componentFactory: PropTypes.object,
	reduxFormProps: PropTypes.object,
	_extra: PropTypes.object
};

export default FieldGroup;