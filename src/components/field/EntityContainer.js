import React from 'react';
import PropTypes from 'prop-types';

import propTypes from '../../util/FieldPropTypes';

export default class EntityContainer extends React.Component {
    static propTypes = propTypes;

    getHeader = () => {
        let { displayName } = this.props;

        if (displayName) {
            return (
                <header className="metaform-group-header no-lateral-margin">
                    <span className="metaform-group-title">
                        {displayName}
                    </span>
                </header>
            );
        }

        return null;
    };

    getComponents = () => {
        let { componentFactory, layout, fields } = this.props;

        return componentFactory.buildGroupComponent({
            component: layout.component,
            layout: layout,
            fields: fields,
            componentFactory: componentFactory
        })
    };

    render() {
        return (
            <div className="entity-container">
                {this.getHeader()}
                <div className="entity-container-content">
                    {this.getComponents()}
                </div>
            </div>
        );
    }
}