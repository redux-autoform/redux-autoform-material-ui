import React, { Component, PropTypes } from 'react';
import { SelectField, MenuItem } from 'material-ui';
import callApi from '../../util/FetchUtils';

class Select extends Component {
    static propTypes = {
        options: PropTypes.any.isRequired,
        value: PropTypes.any,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        displayName: PropTypes.string,
        name: PropTypes.string.isRequired,
        error: PropTypes.string,
        help: PropTypes.string
    };

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
        let { displayName, placeholder, error, touched, active, help, onBlur } = this.props;
	    let errors = (touched || active)? error : null;
	    let { value } = this.state;
        let helpBlock = null;

        if (help) {
            helpBlock = (
                <h5 style={{color: "#9e9e9e"}}>
                    {help}
                </h5>
            )
        }

        console.info("Select - This are the props => " + JSON.stringify(Object.keys(this.props), null, 2));

        return (
            <div>
                <SelectField
                    errorText={errors}
                    floatingLabelText={displayName}
                    value={value}
                    hintText={placeholder}
                    onChange={this.onChange}
                    onBlur={onBlur}
                    floatingLabelFixed
                    fullWidth
                >
                    {this.getItems()}
                </SelectField>
                {helpBlock}
            </div>
        )
    }
}

export default Select;