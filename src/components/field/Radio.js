import React, { Component, PropTypes } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui';
import FormGroup from '../common/FormGroup';

class Radio extends Component {
    onChange = (event, value) => {
        let { onChange } = this.props;
        onChange(value);
    };

    getOptions = () => {
        let { options, name, fieldLayout } = this.props;

        // // these props don't vary per item
        // let invariantRadioProps = { inline: fieldLayout == 'inline', name, onChange: this.onChange };

        return options.map(({text, value}, index) => (
            <RadioButton key={index} label={text} value={value}/>
        ))
    };

    render() {
        let { error, touched, displayName, name, help, fieldLayout, innerSize, value, onBlur } = this.props;
        // let formGroupProps = { error, touched, displayName, name, help, fieldLayout, innerSize };
        let helpBlock = null;
        let nameBlock = null;

        if (help) {
            helpBlock = <h5 style={{color: "#9e9e9e"}}>{help}</h5>;
        }

        if (displayName) {
            nameBlock = <h4 style={{color: "#757575"}}>{displayName}</h4>;
        }

        console.info("Radio - This are the props => " + JSON.stringify(Object.keys(this.props), null, 2));

        return (
            <FormGroup>
                {nameBlock}
                <RadioButtonGroup
                    name={name}
                    valueSelected={value}
                    onChange={this.onChange}
                    onBlur={onBlur}
                >
                    {this.getOptions()}
                </RadioButtonGroup>
                {helpBlock}
            </FormGroup>
        )
    }
}

Radio.propTypes = {

    //Any props
    value: PropTypes.any,

    //Bool props
    checked: PropTypes.bool,
    valid: PropTypes.bool,
    invalid: PropTypes.bool,
    dirty: PropTypes.bool,
    pristine: PropTypes.bool,
    active: PropTypes.bool,
    touched: PropTypes.bool,
    visited: PropTypes.bool,
    autofilled: PropTypes.bool,
    required: PropTypes.bool,

    //String props
    component: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string,
    displayName: PropTypes.string,
    initialValue: PropTypes.string,
    fieldLayout: PropTypes.string,

    //Function props
    autofill: PropTypes.func,
    onBlur: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    onUpdate: PropTypes.func,
    onChange: PropTypes.func,

    //Object props
    componentFactory: PropTypes.object,
    reduxFormProps: PropTypes.object,
    _extra: PropTypes.object
};

export default Radio;