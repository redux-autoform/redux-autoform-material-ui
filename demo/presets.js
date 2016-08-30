if (process.env.APP_ENV !== 'browser') {
    require.extensions['.txt'] = function (module, filename) {
        var fs = require('fs');
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
        schema: require('./presets/default.txt')
    },
    {
        name: 'layouts',
        displayName: 'Layouts',
        entityName: 'contact',
        layoutName: 'edit',
        schema: require('./presets/layouts.txt')
    },
    {
        name: 'layoutsTabs',
        displayName: 'Layouts - Tabs',
        entityName: 'contact',
        layoutName: 'edit',
        formTitle: 'Edit contact',
        schema: require('./presets/layoutsTabs.txt')
    },
    {
        name: 'layoutsWizard',
        displayName: 'Layouts - Wizard (Experimental)',
        entityName: 'contact',
        layoutName: 'wizard',
        formTitle: 'Edit contact',
        schema: require('./presets/layoutsWizard.txt')
    },
    {
        name: 'layoutsConditionalWizard',
        displayName: 'Layouts - Conditional Wizard (Experimental)',
        entityName: 'contact',
        layoutName: 'wizard',
        formTitle: 'Edit contact',
        schema: require('./presets/layoutsConditionalWizard.txt')
    },
    {
        name: 'schemaTypeSimple',
        displayName: 'Schema types - Simple',
        entityName: '',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./presets/schemaTypesSimple.txt')
    },
    {
        name: 'componentsCheckbox',
        displayName: 'Components - Checkbox',
        entityName: '',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./presets/ComponentsCheckbox.txt')
    },
    {
        name: 'componentsDateTimePicker',
        displayName: 'Components - DateTimePicker',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./presets/componentsDateTimePicker.txt')
    },
    {
        name: 'componentsTextBox',
        displayName: 'Components - TextBox',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./presets/componentsTextBox.txt')
    },
    {
        name: 'componentsTextBoxInt',
        displayName: 'Components - TextBox (int)',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./presets/componentsTextBoxInt.txt')
    },
    {
        name: 'componentsTextBoxFloat',
        displayName: 'Components - TextBox (float)',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./presets/componentsTextBoxFloat.txt')
    },
    {
        name: 'componentsPassword',
        displayName: 'Components - Password',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./presets/componentsPassword.txt')
    },
    {
        name: 'componentsTextArea',
        displayName: 'Components - TextArea',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./presets/componentsTextArea.txt')
    },
    {
        name: 'componentsSelect',
        displayName: 'Components - Select',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./presets/componentsSelect.txt')
    },
    {
        name: 'componentsRadio',
        displayName: 'Components - Radio',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./presets/componentsRadio.txt')
    },
    {
        name: 'componentsLookup',
        displayName: 'Components - Lookup',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./presets/componentsLookup.txt')
    },
    {
        name: 'componentsArrayContainer',
        displayName: 'Components - ArrayContainer',
        entityName: 'contact',
        layoutName: '',
        formTitle: 'Edit contact',
        schema: require('./presets/componentsArrrayContainer.txt')
    },
    {
        name: 'componentsFieldGroup',
        displayName: 'Components - FieldGroup',
        entityName: 'contact',
        layoutName: 'edit',
        formTitle: 'Edit contact',
        schema: require('./presets/componentsFieldGroup.txt')
    },
    {
        name: 'componentsFileUpload',
        displayName: 'Components - FileUpload (Experimental)',
        entityName: 'contact',
        layoutName: 'edit',
        formTitle: 'Edit contact',
        schema: require('./presets/componentsFileUpload.txt')
    }


]