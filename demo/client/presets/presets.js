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
        schema: require('./base/default.txt')
    },
    {
        name: 'layouts',
        displayName: 'Layouts',
        entityName: 'contact',
        layoutName: 'edit',
        schema: require('./base/layouts.txt')
    },
    {
        name: 'layoutsTabs',
        displayName: 'Layouts - Tabs (Experimental)',
        entityName: 'contact',
        layoutName: 'edit',
        formTitle: 'Edit contact',
        schema: require('./base/layoutsTabs.txt')
    },
    {
        name: 'layoutsWizardTabs',
        displayName: 'Layouts - WizardTabs (Experimental)',
        entityName: 'contact',
        layoutName: 'edit',
        formTitle: 'Edit contact',
        schema: require('./base/layoutsWizardTabs.txt')
    },
    {
        name: 'layoutsWizard',
        displayName: 'Layouts - Wizard (Experimental)',
        entityName: 'contact',
        layoutName: 'wizard',
        formTitle: 'Edit contact',
        schema: require('./base/layoutsWizard.txt')
    },
    {
        name: 'layoutsConditionalWizard',
        displayName: 'Layouts - Conditional Wizard (Experimental)',
        entityName: 'contact',
        layoutName: 'wizard',
        formTitle: 'Edit contact',
        schema: require('./base/layoutsConditionalWizard.txt')
    },
    {
        name: 'schemaTypeSimple',
        displayName: 'Schema types - Simple',
        entityName: '',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/schemaTypesSimple.txt')
    },
    {
        name: 'componentsCheckbox',
        displayName: 'Components - Checkbox',
        entityName: '',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/ComponentsCheckbox.txt')
    },
    {
        name: 'componentsDateTimePicker',
        displayName: 'Components - DateTimePicker',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/componentsDateTimePicker.txt')
    },
    {
        name: 'componentsTextBox',
        displayName: 'Components - TextBox',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/componentsTextBox.txt')
    },
    {
        name: 'componentsNumber',
        displayName: 'Components - Number',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/componentsNumber.txt')
    },
    {
        name: 'componentsTextBoxInt',
        displayName: 'Components - TextBox (int)',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/componentsTextBoxInt.txt')
    },
    {
        name: 'componentsTextBoxFloat',
        displayName: 'Components - TextBox (float)',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/componentsTextBoxFloat.txt')
    },
    {
        name: 'componentsPassword',
        displayName: 'Components - Password',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/componentsPassword.txt')
    },
    {
        name: 'componentsTextArea',
        displayName: 'Components - TextArea',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/componentsTextArea.txt')
    },
    {
        name: 'componentsSelect',
        displayName: 'Components - Select',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/componentsSelect.txt')
    },
    {
        name: 'componentsRadio',
        displayName: 'Components - Radio',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/componentsRadio.txt')
    },
    {
        name: 'componentsLookup',
        displayName: 'Components - Lookup',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/componentsLookup.txt')
    },
    {
        name: 'componentsArrayContainer',
        displayName: 'Components - ArrayContainer',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./base/componentsArrrayContainer.txt')
    },
    {
        name: 'componentsFieldGroup',
        displayName: 'Components - FieldGroup',
        entityName: 'contact',
        layoutName: 'edit',
        formTitle: 'Edit contact',
        schema: require('./base/componentsFieldGroup.txt')
    },
    {
        name: 'componentsFileUpload',
        displayName: 'Components - FileUpload (Experimental)',
        entityName: 'contact',
        layoutName: 'edit',
        formTitle: 'Edit contact',
        schema: require('./base/componentsFileUpload.txt')
    }


]