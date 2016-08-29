import ComponentFactory from 'redux-autoform-utils/lib/factory/ComponentFactory';

//TODO Jonatan.Salas: Uncomment when finished

import TextBox from '../components/field/TextBox';
import Select from '../components/field/Select';
import TextArea from '../components/field/TextArea';
import Group from '../components/group/Group';
import TabGroup from '../components/group/TabGroup';
import WizardGroup from '../components/group/WizardGroup';
import ArrayContainer from '../components/field/ArrayContainer';
import DateTimePicker from '../components/field/DateTimePicker';
import Lookup from '../components/field/Lookup';
import Static from '../components/field/Static';
import FieldGroup from '../components/field/FieldGroup';
import Checkbox from '../components/field/CheckBox';
import Radio from '../components/field/Radio';

class BootstrapFactory extends ComponentFactory {
    constructor(config) {
        super();
        this.setBaseComponents();
        this.setDefaultConfiguration(config);
    }
    
    setBaseComponents = () => {
        this.registerFieldComponent('TextBox', ['string', 'int', 'float', 'datetime', 'date', 'time'], TextBox);
        this.registerFieldComponent('Select', ['string'], Select);
        this.registerFieldComponent('Radio', ['string'], Radio);
        this.registerFieldComponent('Lookup', ['string'], Lookup);
        this.registerFieldComponent('TextArea', ['string'], TextArea);
        this.registerFieldComponent('ArrayContainer', ['array'], ArrayContainer);
        this.registerFieldComponent('DateTimePicker', ['datetime', 'date', 'time'], DateTimePicker);
        this.registerFieldComponent('Checkbox', ['bool'], Checkbox);
        this.registerFieldComponent('Static', ['string', 'int', 'float', 'datetime', 'date', 'time', 'bool'], Static);
        this.registerFieldComponent('FieldGroup', ['group'], FieldGroup);

	    
        this.registerGroupComponent('Group', Group);
        this.registerGroupComponent('TabGroup', TabGroup);
        this.registerGroupComponent('WizardGroup', WizardGroup);
    };
    
    setDefaultConfiguration = (config) => {
        this.setDefaultFieldComponents(config);
        this.setDefaultGroupComponent('Group');
    };

}

export default BootstrapFactory;