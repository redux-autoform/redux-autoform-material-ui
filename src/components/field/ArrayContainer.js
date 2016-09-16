import React, { Component, PropTypes } from 'react';
import { RaisedButton, Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui';
import Item from '../common/ArrayContainerItem';
import FormGroup from '../common/FormGroup';
import shouldComponentUpdate from '../../util/wrapUpdate';

@shouldComponentUpdate
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
		        <Toolbar className="add-bar">
			        <ToolbarGroup firstChild/>
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

        const toolbar = {
            border: "1px solid #616161",
            borderRadius: "2px",
	        marginTop: "10px"
        };

        const title = {
	        fontSize: "14px",
	        marginLeft: "10px"
        };

        if (components.length) {
            return components;
        } else {
            return (
                <Toolbar style={toolbar}>
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
        let { displayName, fieldLayout, innerSize, name, addonAfter, help, addonBefore } = this.props;
        let props = {
        	displayName,
	        name,
	        fieldLayout,
	        innerSize,
	        addonAfter,
	        addonBefore,
	        help
        };

        return (
            <FormGroup {...props}>
	            {this.getAllComponents()}
                {this.getAddBar()}
            </FormGroup>
        );
    }
}

ArrayContainer.propTypes = {

    //Number props
    innerSize: PropTypes.number,

    //String props
	addonBefore: PropTypes.string,
	addonAfter: PropTypes.string,
	help: PropTypes.string,
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