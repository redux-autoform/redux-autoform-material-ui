import React, { Component, PropTypes } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui';
import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

class Radio extends Component {
    onChange = (event, value) => {
        let { onChange } = this.props;
        onChange(value);
    };

    getOptions = () => {
        let { options } = this.props;
        return options.map(({text, value}, index) => <RadioButton key={index} label={text} value={value}/>)
    };

    render() {
        let { required, displayName, name, help, value, onBlur, addonAfter, addonBefore, component} = this.props;
        let props = {
        	displayName,
	        name,
	        help,
	        addonAfter,
	        addonBefore,
	        component,
            required
        };

        return (
            <FormGroup {...props}>
                <RadioButtonGroup
                    name={name}
                    valueSelected={value}
                    onChange={this.onChange}
                    onBlur={onBlur}
                >
                    {this.getOptions()}
                </RadioButtonGroup>
            </FormGroup>
        )
    }
}

Radio.propTypes = propTypes;

export default Radio;