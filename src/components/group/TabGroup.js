import React, { Component, PropTypes } from 'react';
import BaseGroup from './BaseGroup';
import { Tab, Tabs } from 'material-ui';

const mergeJson = (arr) => arr.reduce((prev, actual) => ({...prev, ...actual}));
const intersect = (a, b) => new Set([...a].filter(x => b.has(x)));

class TabGroup extends BaseGroup {
	static propTypes = {
		component: PropTypes.string,
		fields: PropTypes.array.isRequired,
		layout: PropTypes.object.isRequired,
		componentFactory: PropTypes.object.isRequired
	};

	tabsContext = {
		fields: []
	};

	state = {
		position: 0,
		fieldsMap: []
	};

    getComponents = () => {
        let { layout, componentFactory, fields } = this.props;
        let components;

        if (layout.fields) {

            components = layout.fields.map(field => {
                let fieldMetadata = fields.find(cp => cp.name === field.name);

                if (!fieldMetadata) {
                    throw Error(`Could not find field. Field: ${field.name}`);
                }

                // in case the field is going to render layouts internally, it's going to need information about the
                // layout and field. I'm not sure if this is the best way to do it, probably not. TODO: Review it.
                fieldMetadata._extra = {layout, fields};

                return {
                    data: fieldMetadata,
                    length: layout.fields.length,
                    component: componentFactory.buildFieldComponent(fieldMetadata)
                }
            });

        } else if (layout.groups) {
            components = layout.groups.map(group => {
                group = {...group, headLess: true};

                return {
                    data: group,
                    length: layout.groups.length,
                    component: componentFactory.buildGroupComponent({
                        component: group.component,
                        layout: group,
                        fields: fields,
                        componentFactory: componentFactory
                    })
                }
            });
        }

        return components;
    };

	onTabSelected = (position) => {
		this.setState({position: position});
	};

	updateTabContext = () => {
		let { fields } = this.props;

		// Reads each field value of autoform and creates an object fieldName => error.
		this.tabsContext.fields = Object.keys(mergeJson(fields.map(field => {
			if (field.reduxFormProps.touched) {
				return (field.reduxFormProps.error)? {[field.name]: field.reduxFormProps.error} : null
			}

			return null;
		})));
	}; 

	getFieldsByTabArray = () => {
		let { layout } = this.props;

		let tabMap = layout.groups.map((group, index) => ({[index]: group.fields}));
		tabMap.forEach((tabNum, index) => {
			tabNum[index] = tabNum[index].map(field => field.name);
		});

		return mergeJson(tabMap);
	};

	getStyle = (position) => {
		const { fieldsMap } = this.state;
		let style = {};

		if(fieldsMap.length == 0)
			return style;

		let fieldsByTab = fieldsMap[position];

		let hasErrors = intersect(new Set(fieldsByTab), new Set(this.tabsContext.fields)).size > 0;

		if(hasErrors)
			style = {backgroundColor: "red"};

		console.info(JSON.stringify(style));

		return style;
	};

	componentDidMount() {
		this.setState({
			fieldsMap: this.getFieldsByTabArray()
		});
	}

	render() {
		let { layout } = this.props;
		let { position } = this.state;
		let content = this.getContent();

		this.updateTabContext();

		return (
			<section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="metaform-group">
                            <Tabs initialSelectedIndex={position} onChange={this.onTabSelected}>{
                                layout.groups.map(({ title }, position) => (
	                                <Tab key={position} label={title} value={position} style={this.getStyle(position)}/>
	                            ))
                            }
                            </Tabs>
                            <div className="metaform-group-content">
                                {content[position]}
                            </div>
                        </div>
                    </div>
                </div>
			</section>
		);
	}
}

export default TabGroup;