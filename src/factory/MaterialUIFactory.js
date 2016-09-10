import ComponentFactory from 'redux-autoform-utils/lib/factory/ComponentFactory';

import Root from '../components/common/Root';

import Group from '../components/group/Group';
import TabGroup from '../components/group/TabGroup';
import WizardGroup from '../components/group/WizardGroup';
import WizardTabGroup from '../components/group/WizardTabGroup';
import QuestionnaireGroup from '../components/group/QuestionnaireGroup';

import Number from '../components/field/Number';
import TextBox from '../components/field/TextBox';
import Password from '../components/field/Password';
import Email from '../components/field/Email';
import Select from '../components/field/Select';
import TextArea from '../components/field/TextArea';
import ArrayContainer from '../components/field/ArrayContainer';
import DateTimePicker from '../components/field/DateTimePicker';
import Lookup from '../components/field/Lookup';
import Static from '../components/field/Static';
import FieldGroup from '../components/field/FieldGroup';
import Checkbox from '../components/field/CheckBox';
import Radio from '../components/field/Radio';
import FileUpload from '../components/field/FileUpload';

class MaterialUIFactory extends ComponentFactory {
    constructor(config) {
        super();
        this.setBaseComponents();
        this.setDefaultConfiguration(config);
    }
    
    setBaseComponents = () => {
	    this.registerFieldComponent('TextBox', ['string', 'int', 'float', 'datetime', 'date', 'time'], TextBox);
	    this.registerFieldComponent('Password', ['string'], Password);
	    this.registerFieldComponent('Number', ['string'], Number);
        this.registerFieldComponent('Email', ['string'], Email);
	    this.registerFieldComponent('Select', ['string'], Select);
	    this.registerFieldComponent('Radio', ['string'], Radio);
	    this.registerFieldComponent('Lookup', ['string'], Lookup);
	    this.registerFieldComponent('TextArea', ['string'], TextArea);
	    this.registerFieldComponent('ArrayContainer', ['array'], ArrayContainer);
	    this.registerFieldComponent('DateTimePicker', ['datetime', 'date', 'time'], DateTimePicker);
	    this.registerFieldComponent('Checkbox', ['bool'], Checkbox);
	    this.registerFieldComponent('Static', ['string', 'int', 'float', 'datetime', 'date', 'time', 'bool'], Static);
	    this.registerFieldComponent('FieldGroup', ['group'], FieldGroup);
	    this.registerFieldComponent('FileUpload', ['string'], FileUpload);
	    
        this.registerGroupComponent('Group', Group);
        this.registerGroupComponent('TabGroup', TabGroup);
        this.registerGroupComponent('WizardGroup', WizardGroup);
        this.registerGroupComponent('WizardTabGroup', WizardTabGroup);
        this.registerGroupComponent('QuestionnaireGroup', QuestionnaireGroup);

        this.registerRootComponent("default", Root);
    };
    
    setDefaultConfiguration = (config) => {
        this.setDefaultFieldComponents(config);
        this.setDefaultGroupComponent('Group');

        this.setCurrentRoot("default");
    };

}

export default MaterialUIFactory;