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
        name: 'layoutsTabs',
        displayName: 'Layouts - Tabs (Experimental)',
        entityName: 'contact',
        layoutName: 'edit',
        formTitle: 'Edit contact',
        schema: require('./base/group/Tabs.txt')
    },
    {
        name: 'layoutsWizardTabs',
        displayName: 'Layouts - WizardTabs (Experimental)',
        entityName: 'contact',
        layoutName: 'edit',
        formTitle: 'Edit contact',
        schema: require('./base/group/WizardTabs.txt')
    },
    {
        name: 'layoutsWizard',
        displayName: 'Layouts - Wizard (Experimental)',
        entityName: 'contact',
        layoutName: 'wizard',
        formTitle: 'Edit contact',
        schema: require('./base/group/Wizard.txt')
    },
    {
        name: 'layoutsConditionalWizard',
        displayName: 'Layouts - Conditional Wizard (Experimental)',
        entityName: 'contact',
        layoutName: 'wizard',
        formTitle: 'Edit contact',
        schema: require('./base/group/ConditionalWizard.txt')
    },
    {
        name: 'schemaTypeSimple',
        displayName: 'Schema types - Simple',
        entityName: '',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/group/SchemaSimple.txt')
    },
    {
        name: 'componentsCheckbox',
        displayName: 'Components - Checkbox',
        entityName: '',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/components/Checkbox.txt')
    },
    {
        name: 'componentsDateTimePicker',
        displayName: 'Components - DateTimePicker',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/components/DateTimePicker.txt')
    },
    {
        name: 'componentsTextBox',
        displayName: 'Components - TextBox',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/components/TextBox.txt')
    },
    {
        name: 'componentsNumber',
        displayName: 'Components - Number',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/components/Number.txt')
    },
    {
        name: 'componentsTextBoxInt',
        displayName: 'Components - TextBox (int)',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/components/TextBoxInt.txt')
    },
    {
        name: 'componentsTextBoxFloat',
        displayName: 'Components - TextBox (float)',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/components/TextBoxFloat.txt')
    },
    {
        name: 'componentsPassword',
        displayName: 'Components - Password',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/components/Password.txt')
    },
    {
        name: 'componentsTextArea',
        displayName: 'Components - TextArea',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/components/TextArea.txt')
    },
    {
        name: 'componentsSelect',
        displayName: 'Components - Select',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/components/Select.txt')
    },
    {
        name: 'componentsRadio',
        displayName: 'Components - Radio',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/components/Radio.txt')
    },
    {
        name: 'componentsLookup',
        displayName: 'Components - Lookup',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/components/Lookup.txt')
    },
    {
        name: 'componentsArrayContainer',
        displayName: 'Components - ArrayContainer',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/components/ArrrayContainer.txt')
    },
    {
        name: 'componentsFieldGroup',
        displayName: 'Components - FieldGroup',
        entityName: 'contact',
        layoutName: 'edit',
        formTitle: 'Edit contact',
        schema: require('./base/components/FieldGroup.txt')
    },
    {
        name: 'componentsFileUpload',
        displayName: 'Components - FileUpload (Experimental)',
        entityName: 'contact',
        layoutName: 'edit',
        formTitle: 'Edit contact',
        schema: require('./base/components/FileUpload.txt')
    }
]