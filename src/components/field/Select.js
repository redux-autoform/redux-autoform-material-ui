import React, { Component, PropTypes } from 'react';
import { SelectField, MenuItem } from 'material-ui';
import Utils from '../../util/FetchUtils';

class Select extends Component {
    static propTypes = {
        value: PropTypes.any,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        displayName: PropTypes.string,
        name: PropTypes.string.isRequired,
        error: PropTypes.string
    };

    static childContextTypes = {
        muiTheme: PropTypes.object.isRequired
    };

	state = {
		value: []
	};

	onChange = (event, index, value) => {
		let { onChange } = this.props;

		onChange(value);
		this.setState({value});
	};

	getItems = () => {
		//TODO evaluate if options.url come and array comes too
		let { options } = this.props;
		let { url } = options;

		if (Array.isArray(options)) {
			return this.mapItems(options);
		}
		else if (url) {
			let newOptions = Utils.fetch(url);

			if (Array.isArray(newOptions)) {
				return this.mapItems(newOptions);
			}
			else {
				console.error(
					`Select - You are trying to render this object ${JSON.stringify(newOptions, null, 2)}`
				);
			}
		}
	};

	mapItems = (arr) => {
		return arr.map(({ value, text }, index) => (
			<MenuItem key={index} value={value} primaryText={text}/>
		));
	};

    render() {
        let { displayName, placeholder, error, touched, active } = this.props;
	    let errors = (touched || active)? error : null;
	    let { value } = this.state;

        return (
            <SelectField
	            errorText={errors}
	            floatingLabelText={displayName}
	            value={value}
	            hintText={placeholder}
	            onChange={this.onChange}
	            floatingLabelFixed
	            fullWidth>
	            {this.getItems()}
            </SelectField>
        )
    }
}

export default Select;