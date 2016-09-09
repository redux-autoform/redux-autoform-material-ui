import React, { Component, PropTypes } from 'react';
import { FlatButton, RaisedButton } from 'material-ui';
import Item from '../common/ArrayContainerItem';
import FormGroup from '../common/FormGroup';

class ArrayContainer extends Component {

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
                        <RaisedButton label={text} onClick={this.onClick} primary/>
                    </span>
                </div>
            );

        } else {
            return null;
        }
    };

    getAllComponents = () => {
        let components = this.getComponents();

        const div = {
            width: "100%",
            display: "table",
            marginTop: "5px",
            marginBottom: "5px",
            padding: "5px",
            backgroundColor: "#ffecb3",
            border: "1px solid #ffe082",
            borderRadius: "2px",
            justifyContent: "center"
        };

        const span = {
            float: "left",
            marginTop: "7px",
            marginRight: "5px"
        };

        if (components.length) {
            return components;
        } else {
            return (
                <div style={div}>
                    <span style={span}>This array is empty </span><FlatButton label="Add new Item" backgroundColor="#ffe082" onClick={this.onClick} style={{float: "right"}}/>
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
            <FormGroup>
                <div className="array-container-content">
                    {components}
                </div>
                {addBar}
            </FormGroup>
        );
    }
}

ArrayContainer.propTypes = {

    //Number props
    innerSize: PropTypes.number,

    //String props
    component: PropTypes.string,
    name: PropTypes.string,
    addText: PropTypes.string,
    type: PropTypes.string,
    arrayType: PropTypes.string,
    entityType: PropTypes.string,
    layoutName: PropTypes.string,
    displayName: PropTypes.string,
    fieldLayout: PropTypes.string,

    //Array props
    reduxFormProps: PropTypes.array,
    fields: PropTypes.array,

    //Object props
    layout: PropTypes.object,
    componentFactory: PropTypes.object,
    _extra: PropTypes.object
};

export default ArrayContainer;