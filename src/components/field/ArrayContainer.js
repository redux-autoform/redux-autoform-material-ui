import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import ToolbarTitle from 'material-ui/Toolbar/ToolbarTitle';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

import FormGroup from '../common/FormGroup';
import Item from '../common/ArrayContainerItem';
import propTypes from '../../util/FieldPropTypes';

export default class ArrayContainer extends React.Component {
    static propTypes = {
        ...propTypes,
        reduxFormProps: PropTypes.array.isRequired
    };

    onClick = () => {
        let { reduxFormProps } = this.props;
        reduxFormProps.addField({});
    };

    onAction = (event, child, index) => {
        let { id, value, fields, onChange, reduxFormProps: { swapFields, removeField } } = this.props;
        let key = child.key;

        switch (key) {
            case "remove":
                removeField(index);
                break;
            case "move_up":
                if (index > 0) {
                    swapFields(index, index - 1);
                }
                break;
            case "move_down":
                if (index < fields.length - 1) {
                    swapFields(index, index + 1);
                }
                break;
            case "move_first":
                swapFields(index, 0);
                break;
            case "move_last":
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
            <Item key={`array-item-${index}-wrapper`} index={index} onAction={this.onAction}>
                {this.buildGroupComponent(field)}
            </Item>
        ));
    };

    getAddBar = () => {
        let { addText } = this.props;

        let text = addText ? addText : "Add";
        let components = this.getComponents();

        if (components.length) {
            return (
                <Toolbar>
                    <ToolbarGroup firstChild />
                    <ToolbarGroup lastChild>
                        <RaisedButton
                            label={text}
                            onClick={this.onClick}
                            primary
                        />
                    </ToolbarGroup>
                </Toolbar>
            );
        }

        return null;
    };

    getAllComponents = () => {
        let components = this.getComponents();

        const title = {
            fontSize: "14px",
            marginLeft: "10px"
        };

        if (components.length) {
            return components;
        } else {
            return (
                <Toolbar>
                    <ToolbarGroup firstChild>
                        <ToolbarTitle
                            text="This array is empty"
                            style={title}
                        />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <RaisedButton
                            label="Add new Item"
                            onClick={this.onClick}
                            primary
                        />
                    </ToolbarGroup>
                </Toolbar>
            );
        }
    };

    render() {
        let { displayName, fieldLayout, innerSize, name, addonAfter, help, addonBefore, required } = this.props;

        let props = {
            displayName,
            name,
            fieldLayout,
            innerSize,
            addonAfter,
            addonBefore,
            help,
            required
        };

        return (
            <FormGroup {...props}>
                {this.getAllComponents()}
                {this.getAddBar()}
            </FormGroup>
        );
    }
}