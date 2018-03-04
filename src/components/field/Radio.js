import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from 'material-ui/RadioButton/RadioButton';
import RadioButtonGroup from 'material-ui/RadioButton/RadioButtonGroup';

import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

export default class Radio extends React.Component {
    static propTypes = propTypes;

    onChange = (event, value) => this.props.onChange(value);

    getOptions = () => {
        let { options } = this.props;
        return options.map(({ text, value }, index) => <RadioButton key={index} label={text} value={value} />)
    };

    render() {
        let { required, displayName, name, help, value, onBlur, addonAfter, addonBefore, component } = this.props;
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