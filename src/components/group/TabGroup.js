import React from 'react';
import PropTypes from 'prop-types';

import Tab from 'material-ui/Tabs/Tab';
import Tabs from 'material-ui/Tabs/Tabs';

import BaseGroup from './BaseGroup';
import Arrays from '../../util/Arrays';
import propTypes from '../../util/GroupPropTypes';

export default class TabGroup extends BaseGroup {
	static propTypes = propTypes;

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
				fieldMetadata._extra = { layout, fields };

				return {
					data: fieldMetadata,
					length: layout.fields.length,
					component: componentFactory.buildFieldComponent(fieldMetadata)
				}
			});

		} else if (layout.groups) {
			components = layout.groups.map(group => {
				group = { ...group, headLess: true };

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
		this.setState({ position });
	};

	updateTabContext = ({ fields }) => {
		// Reads each field value of autoform and creates an object fieldName => error.
		this.tabsContext.fields = Object.keys(Arrays.mergeJson(fields.map(field => {
			if (field.reduxFormProps.touched) {
				return (field.reduxFormProps.error) ? { [field.name]: field.reduxFormProps.error } : null
			}

			return null;
		})));
	};

	getAllTabs = (groups) => {
		return groups.map((group, index) => this.getTabMap(group, index));
	};

	getTabMap = (group, idx) => {
		let data = null;

		if (group.groups) {
			data = group.groups.map(g => this.getTabMap(g, idx));
		} else if (group.fields) {
			data = group.fields;
		}

		return {
			[idx]: data
		}
	};

	getFieldsByTabArray2 = () => {
		let { layout } = this.props;

		let tabMap = this.getAllTabs(layout.groups);

		tabMap.forEach((tabNum, index) => {
			tabNum[index] = tabNum[index].map(field => {
				if (Array.isArray(field[index])) {
					return Arrays.mergeJson(field[index].map(f => f.name));
				}

				return field.name;
			});
		});

		console.info(`This is TabMap -> ${JSON.stringify(tabMap, null, 2)}`);
		return Arrays.mergeJson(tabMap);
	};

	getStyle = (position) => {
		const { fieldsMap } = this.state;
		let style = {};

		if (fieldsMap.length == 0)
			return style;

		let fieldsByTab = fieldsMap[position];

		let hasErrors = Arrays.intersect(fieldsByTab, this.tabsContext.fields).size > 0;

		if (hasErrors)
			style = { backgroundColor: "red" };

		console.info(JSON.stringify(style));

		return style;
	};

	componentDidMount() {
		this.setState({
			fieldsMap: this.getFieldsByTabArray2()
		});

		this.updateTabContext(this.props);
	}

	componentWillReceiveProps(nextProps) {
		if (!Object.is(this.props, nextProps)) {
			this.updateTabContext(nextProps);
		}
	}

	render() {
		let { layout } = this.props;
		let { position } = this.state;
		let content = this.getContent();

		return (
			<section>
				<div className="container-fluid">
					<div className="row">
						<div className="metaform-group">
							<Tabs initialSelectedIndex={position} onChange={this.onTabSelected}>{
								layout.groups.map(({ title }, position) => (
									<Tab key={position} label={title} value={position} style={this.getStyle(position)} />
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