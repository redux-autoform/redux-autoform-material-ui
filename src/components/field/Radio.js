import React, { Component, PropTypes } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui';

class Radio extends Component {
    handleChange = (event, value) => {
        let { onChange } = this.props;
        onChange(value);
    };

    getOptions = () => {
        let { options, name, fieldLayout } = this.props;

        // // these props don't vary per item
        // let invariantRadioProps = { inline: fieldLayout == 'inline', name, onChange: this.onChange };

        return options.map(({text, value}, index) => (
            <RadioButton key={index} label={text} value={value} onChange={this.handleChange}/>
        ))
    };

    render() {
        let { error, touched, displayName, name, help, fieldLayout, innerSize, value } = this.props;
        // let formGroupProps = { error, touched, displayName, name, help, fieldLayout, innerSize };
        let helpBlock = null;
        let nameBlock = null;

        if (help) {
            helpBlock = <h5 style={{color: "#9e9e9e"}}>{help}</h5>;
        }

        if (displayName) {
            nameBlock = <h4 style={{color: "#757575"}}>{displayName}</h4>;
        }

        return (
            <div>
                {nameBlock}
                <RadioButtonGroup name={name} valueSelected={value}>
                    {this.getOptions()}
                </RadioButtonGroup>
                {helpBlock}
            </div>
        )
    }
}

export default Radio;