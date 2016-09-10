import React, { Component, PropTypes } from 'react';
import { SelectField, MenuItem } from 'material-ui';
import callApi from '../../util/FetchUtils';
import shouldComponentUpdate from '../../util/wrapUpdate';

@shouldComponentUpdate
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

Select.propTypes = {

    //Number props
    innerSize: PropTypes.number,

    //Any props
    value: PropTypes.any,
    options: PropTypes.any,

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
    help: PropTypes.string,
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

export default Select;