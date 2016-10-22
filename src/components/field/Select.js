import React, { Component, PropTypes } from 'react';
import { SelectField, MenuItem } from 'material-ui';
import callApi from '../../util/FetchUtils';
import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

class Select extends Component {

	state = {
		value: {},
        urlOptions: [],
        urlErrors: null
	};

	onChange = (event, index, value) => {
		let { onChange } = this.props;

		onChange(value);
		this.setState({value});
	};

    //TODO evaluate if options.url come and array comes too
	getItems = () => {
		let { options } = this.props;
		let { url, labelKey, valueKey } = options;
        let { urlOptions, urlErrors } = this.state;

		if (Array.isArray(options)) {
			return this.renderItems(options);
		}
		else if (url && labelKey && valueKey) {
            if (Array.isArray(urlOptions)) {
                return this.renderItems(urlOptions, valueKey, labelKey);
            }
            else if (urlErrors) {
                console.error(
                    `Select - There was the following error when fetching from resource =>
                    ${JSON.stringify(urlErrors, null, 2)}`
                );
            }
        }
	};

	renderItems = (arr, value = 'value', text = 'text') => {
	    return arr.map((item, index) => (
            <MenuItem
                key={`select-item-${index}-wrapper`}
                value={item[value]}
                primaryText={item[text]}
            />
        ));
    };

	componentWillMount() {
        let { options } = this.props;
        let { url } = options;

        if (url) {
            callApi(url).then(response => response.json())
                .then(response => this.setState({ urlOptions: response }));
        }
    }

    render() {
        let { addonBefore, addonAfter, displayName, name, placeholder, error, touched, active, help, onBlur, required } = this.props;
	    let errors = (touched || active)? error : null;
	    let { value } = this.state;

	    let props = {
		    displayName,
		    name,
		    help,
		    addonBefore,
		    addonAfter,
            required
	    };

        return (
            <FormGroup {...props}>
                <SelectField
                    errorText={errors}
                    value={value}
                    hintText={placeholder}
                    onChange={this.onChange}
                    onBlur={onBlur}
                    fullWidth
                >
                    {this.getItems()}
                </SelectField>
            </FormGroup>
        )
    }
}

Select.propTypes = propTypes;

export default Select;