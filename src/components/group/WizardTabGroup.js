import React, { Component, PropTypes } from 'react';
import BaseGroup from './BaseGroup';
import { Tab, Tabs, RaisedButton, Toolbar, ToolbarGroup } from 'material-ui';

class TabGroup extends BaseGroup {
	static propTypes = {
		component: PropTypes.string,
		fields: PropTypes.array.isRequired,
		layout: PropTypes.object.isRequired,
		componentFactory: PropTypes.object.isRequired
	};

	state = {
        totalSteps: this.props.layout.groups.length - 1,
		position: 0
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

    nextStep = () => {
        let { position } = this.state;

        this.setState({position : position + 1});
        this.onTabSelected(position + 1);
    };

    backStep = () => {
        let { position } = this.state;

        this.setState({position : position - 1});
        this.onTabSelected(position - 1);
    };

    getButtonSection = () => {
        let { position, totalSteps } = this.state;

        let nextButton = null;
        let backButton = null;

        if (position != 0) {
            backButton = (
                <RaisedButton label="Back" onClick={this.backStep} primary/>
            );
        }

        if (position != totalSteps) {
            nextButton = (
                <RaisedButton label="Next" onClick={this.nextStep} primary/>
            );
        }

        return (
            <div className="row">
                <div className="col-md-12">
                    <Toolbar>
                        <ToolbarGroup firstChild/>
                        <ToolbarGroup lastChild>
                            {backButton}
                            {nextButton}
                        </ToolbarGroup>
                    </Toolbar>
                </div>
            </div>
        )
    };


	onTabSelected = (position) => {
		this.setState({position: position});
	};

	render() {
		let {layout} = this.props;
		let {position} = this.state;
		let content = this.getContent();
        let buttonSection = this.getButtonSection();

        console.info("This is the current position selected: " + position);

		return (
			<section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="metaform-group">
                            <Tabs initialSelectedIndex={position} value={position} onChange={this.onTabSelected}>{
                                layout.groups.map(({ title }, index) => <Tab key={index} label={title} value={index}/>)
                            }
                            </Tabs>
                            <div className="metaform-group-content">
                                {content[position]}
                            </div>
                        </div>
                        {buttonSection}
                    </div>
                </div>
			</section>
		);
	}
}

export default TabGroup;