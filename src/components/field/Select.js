import React, { Component, PropTypes } from 'react';
import { SelectField, MenuItem } from 'material-ui';

class Select extends Component {
    static propTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        displayName: PropTypes.string,
        name: PropTypes.string.isRequired,
        error: PropTypes.string,
        addonBefore: PropTypes.string,
        addonAfter: PropTypes.string
    };

    static childContextTypes = {
        muiTheme: PropTypes.object.isRequired
    };

    render() {
        let { options, value, onChange, displayName } = this.props;

        return (
            <SelectField floatingLabelText={displayName} value={value} onChange={onChange} floatingLabelFixed>
	        {
                options.map(({ value, text }, index) => (
                    <MenuItem key={index} value={value} primaryText={text}/>
                ))
            }
            </SelectField>
        )
    }
}

export default Select;