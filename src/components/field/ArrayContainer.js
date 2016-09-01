import React, { Component, PropTypes } from 'react';
import { RaisedButton } from 'material-ui';
import Item from '../common/ArrayContainerItem';

class ArrayContainer extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        addText: PropTypes.string
    };

    handleAdd = () => {
        let { reduxFormProps } = this.props;
        reduxFormProps.addField({});
    };

    handleItemClick = (event, child, index) => {

        console.info("This is the event value: " + Object.keys(event.target));
        let { id, value, fields, onChange, reduxFormProps: { swapFields, removeField } } = this.props;

        switch (event.target.value) {
            case 0:
                removeField(index);
                break;
            case 1:
                if (index > 0) {
                    swapFields(index, index - 1);
                }
                break;
            case 2:
                if (index < fields.length - 1) {
                    swapFields(index, index + 1);
                }
                break;
            case 3:
                swapFields(index, 0);
                break;
            case 4:
                swapFields(index, fields.length - 1);
                break;
        }

        if (onChange) {
            let values = {
                id: id,
                value: value
            };

            onChange(values);
        }
    };

    buildGroupComponent = (field) => {
        let { componentFactory, layout } = this.props;

        return componentFactory.buildGroupComponent({
            component: layout.component,
            layout: layout,
            fields: field,
            componentFactory: componentFactory
        });
    };

    getComponents = () => {
        let { fields } = this.props;

        return fields.map((field, index) => (
            <Item key={index} index={index} onAction={this.handleItemClick}>
                { this.buildGroupComponent(field) }
            </Item>
        ));
    };

    getAddBar = () => {
        let { addText } = this.props;

        let text = addText ? addText : "Add";
        let components = this.getComponents();

        if (components.length) {
            return (
                <div className="add-bar">
                    <span>
                        <RaisedButton label={text} onClick={this.handleAdd} primary/>
                    </span>
                </div>
            );

        } else {
            return null;
        }
    };

    getAllComponents = () => {
        let components = this.getComponents();

        if (components.length) {
            return components;
        } else {
            return (
                <div>
                    This array is empty. Consider <a onClick={ this.handleAdd }>adding a new item</a>.
                </div>
            );
        }
    };

    render() {
        let { displayName, fieldLayout, innerSize, name } = this.props;
        let formGroupProps = { displayName, name, fieldLayout, innerSize };
        let components = this.getAllComponents();
        let addBar = this.getAddBar();

        return (
            <div>
                <div className="array-container-content">
                    { components }
                </div>
                { addBar }
            </div>
        );
    }
}

export default ArrayContainer;