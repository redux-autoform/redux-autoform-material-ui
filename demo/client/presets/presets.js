if (process.env.APP_ENV !== 'browser') {
	require.extensions['.txt'] = (module, filename) => {
		const fs = require('fs');
		module.exports = fs.readFileSync(filename, 'utf8');
	};
}

export default [
	{
		name: 'default',
		displayName: 'Default',
		entityName: 'contact',
		layoutName: 'edit',
		formTitle: 'Edit contact',
		schema: require('./base/group/Default.txt')
	},
	{
		name: 'layouts',
		displayName: 'Layouts',
		entityName: 'contact',
		layoutName: 'edit',
		schema: require('./base/group/Group.txt')
	},
	{
		name: 'Tabs',
		displayName: 'Layouts - Tabs (Experimental)',
		entityName: 'contact',
		layoutName: 'edit',
		formTitle: 'Edit contact',
		schema: require('./base/group/Tabs.txt')
	},
	{
		name: 'WizardTabs',
		displayName: 'Layouts - WizardTabs (Experimental)',
		entityName: 'contact',
		layoutName: 'edit',
		formTitle: 'Edit contact',
		schema: require('./base/group/WizardTabs.txt')
	},
	{
		name: 'Wizard',
		displayName: 'Layouts - Wizard (Experimental)',
		entityName: 'contact',
		layoutName: 'wizard',
		formTitle: 'Edit contact',
		schema: require('./base/group/Wizard.txt')
	},
	{
		name: 'ConditionalWizard',
		displayName: 'Layouts - Conditional Wizard (Experimental)',
		entityName: 'contact',
		layoutName: 'wizard',
		formTitle: 'Edit contact',
		schema: require('./base/group/ConditionalWizard.txt')
	},
	{
		name: 'SchemaSimple',
		displayName: 'Schema types - Simple',
		entityName: '',
		layoutName: '',
		formTitle: 'Edit contact',
		schema: require('./base/group/SchemaSimple.txt')
	},
	{
		name: 'Checkbox',
		displayName: 'Components - Checkbox',
		entityName: '',
		layoutName: '',
		formTitle: 'Edit contact',
		schema: require('./base/components/Checkbox.txt')
	},
	{
		name: 'DateTimePicker',
		displayName: 'Components - DateTimePicker',
		entityName: 'contact',
		layoutName: '',
		formTitle: 'Edit contact',
		schema: require('./base/components/DateTimePicker.txt')
	},
	{
		name: 'TextBox',
		displayName: 'Components - TextBox',
		entityName: 'contact',
		layoutName: '',
		formTitle: 'Edit contact',
		schema: require('./base/components/TextBox.txt')
	},
	{
		name: 'Number',
		displayName: 'Components - Number',
		entityName: 'contact',
		layoutName: '',
		formTitle: 'Edit contact',
		schema: require('./base/components/Number.txt')
	},
	{
		name: 'TextBoxInt',
		displayName: 'Components - TextBox (int)',
		entityName: 'contact',
		layoutName: '',
		formTitle: 'Edit contact',
		schema: require('./base/components/TextBoxInt.txt')
	},
	{
		name: 'TextBoxFloat',
		displayName: 'Components - TextBox (float)',
		entityName: 'contact',
		layoutName: '',
		formTitle: 'Edit contact',
		schema: require('./base/components/TextBoxFloat.txt')
	},
	{
		name: 'Password',
		displayName: 'Components - Password',
		entityName: 'contact',
		layoutName: '',
		formTitle: 'Edit contact',
		schema: require('./base/components/Password.txt')
	},
	{
		name: 'TextArea',
		displayName: 'Components - TextArea',
		entityName: 'contact',
		layoutName: '',
		formTitle: 'Edit contact',
		schema: require('./base/components/TextArea.txt')
	},
	{
		name: 'Select',
		displayName: 'Components - Select',
		entityName: 'contact',
		layoutName: '',
		formTitle: 'Edit contact',
		schema: require('./base/components/Select.txt')
	},
	{
		name: 'Radio',
		displayName: 'Components - Radio',
		entityName: 'contact',
		layoutName: '',
		formTitle: 'Edit contact',
		schema: require('./base/components/Radio.txt')
	},
	{
		name: 'Lookup',
		displayName: 'Components - Lookup',
		entityName: 'contact',
		layoutName: '',
		formTitle: 'Edit contact',
		schema: require('./base/components/Lookup.txt')
	},
	{
		name: 'ArrayContainer',
		displayName: 'Components - ArrayContainer',
		entityName: 'contact',
		layoutName: '',
		formTitle: 'Edit contact',
		schema: require('./base/components/ArrrayContainer.txt')
	},
	{
		name: 'FieldGroup',
		displayName: 'Components - FieldGroup',
		entityName: 'contact',
		layoutName: 'edit',
		formTitle: 'Edit contact',
		schema: require('./base/components/FieldGroup.txt')
	},
	{
		name: 'FileUpload',
		displayName: 'Components - FileUpload (Experimental)',
		entityName: 'contact',
		layoutName: 'edit',
		formTitle: 'Edit contact',
		schema: require('./base/components/FileUpload.txt')
	}
]