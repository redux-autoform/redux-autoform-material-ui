import ComponentFactory from 'redux-autoform-utils/lib/factory/ComponentFactory';

//TODO Jonatan.Salas: Uncomment when finished

// import TextBox from '../components/fieldComponents/TextBox';
// import Select from '../components/fieldComponents/Select';
// import TextArea from '../components/fieldComponents/TextArea';
// import Group from '../components/groupComponents/Group';
// import ArrayContainer from '../components/fieldComponents/ArrayContainer';
// import DateTimePicker from '../components/fieldComponents/DateTimePicker';
// import Lookup from '../components/fieldComponents/Lookup';
// import Static from '../components/fieldComponents/Static';
// import FieldGroup from '../components/fieldComponents/FieldGroup';
// import Checkbox from '../components/fieldComponents/CheckBox';
// import Radio from '../components/fieldComponents/Radio';

class BootstrapFactory extends ComponentFactory {
    constructor(config) {
        super();
        this.setBaseComponents();
        this.setDefaultConfiguration(config);
    }
    
    setBaseComponents = () => {
        // this.registerFieldComponent('TextBox', ['string', 'int', 'float', 'datetime', 'date', 'time'], TextBox);
        // this.registerFieldComponent('Select', ['string'], Select);
        // this.registerFieldComponent('Radio', ['string'], Radio);
        // this.registerFieldComponent('Lookup', ['string'], Lookup);
        // this.registerFieldComponent('TextArea', ['string'], TextArea);
        // this.registerFieldComponent('ArrayContainer', ['array'], ArrayContainer);
        // this.registerFieldComponent('DateTimePicker', ['datetime', 'date', 'time'], DateTimePicker);
        // this.registerFieldComponent('Checkbox', ['bool'], Checkbox);
        // this.registerFieldComponent('Static', ['string', 'int', 'float', 'datetime', 'date', 'time', 'bool'], Static);
        // this.registerFieldComponent('FieldGroup', ['group'], FieldGroup);
        //
        // this.registerGroupComponent('Group', Group);
    };
    
    setDefaultConfiguration = (config) => {
        this.setDefaultFieldComponents(config);
        this.setDefaultGroupComponent('Group');
    };

}

export default BootstrapFactory;