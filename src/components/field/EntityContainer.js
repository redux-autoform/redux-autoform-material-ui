import React, { Component, PropTypes } from 'react';

class EntityContainer extends Component {

    _renderHeader = () => {
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

    _renderComponents = () => {
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
                {this._renderHeader()}
                <div className="entity-container-content">
                    {this._renderComponents()}
                </div>
            </div>
        );
    }
}

EntityContainer.props = {
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

export default EntityContainer;