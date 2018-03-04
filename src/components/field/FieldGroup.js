import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

export default class FieldGroup extends React.Component {
    static propTypes = propTypes;

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