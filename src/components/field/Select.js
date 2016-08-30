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

	state = {
		value: null
	};

	handleChange = (event, index, value) => {
		let { onChange } = this.props;

		onChange(value);
		this.setState({value});
	};

	getItems = () => {
		let { options } = this.props;

		return  options.map(({ value, text }, index) => (
			<MenuItem key={index} value={value} primaryText={text}/>
		));
	};

    render() {
        let { displayName, placeholder } = this.props;
		let { value } = this.state;

        return (
            <SelectField
	            floatingLabelText={displayName}
	            value={value}
	            hintText={placeholder}
	            onChange={this.handleChange}
	            floatingLabelFixed>
	            {this.getItems()}
            </SelectField>
        )
    }
}

export default Select;