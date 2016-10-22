import React, { Component, PropTypes } from 'react';
import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

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
        let { required, name, displayName, help, addonAfter, addonBefore } = this.props;

        let props = {
        	displayName,
	        name,
	        help,
	        addonAfter,
	        addonBefore,
	        required
        };

        return (
            <FormGroup {...props}>
                {this.getGroupContent()}
            </FormGroup>
        );
    }
}

FieldGroup.propTypes = propTypes;

export default FieldGroup;