import React, { Component, PropTypes } from 'react';
import { AutoComplete } from 'material-ui';
import callApi from '../../util/FetchUtils';

class Lookup extends Component {
    state = {
        urlOptions: [],
        urlErrors: null,
        source: []
    };

    onChange = (chosenRequest, index) => {
        let { onChange, options } = this.props;
        let { valueKey } = options;
        let { source } = this.state;
        let value;

        if (valueKey && index !== -1) {
            value = source[index][valueKey];
            onChange(value);
        }
        else if (index !== -1) {
            value = source[index]['value'];
            onChange(value);
        }
    };

    setDataSource = () => {
        let { options } = this.props;
        let { url, labelKey, valueKey, itemsKey } = options;
        let { urlOptions, urlErrors } = this.state;

        if (Array.isArray(options)) {
            let dataSource = options.map(({ value, label }, index) => ({
                text: label,
                value: value
            }));

            this.setState({ source: dataSource });
        }
        else if (url && labelKey && valueKey && itemsKey) {
            if (Array.isArray(urlOptions)) {
                let dataSource = urlOptions.map((item, index) => ({
                    text: item[labelKey],
                    value: item[valueKey]
                }));

                this.setState({ source: dataSource });
            }
            else if (urlErrors) {
                console.error(
                    `Select - There was the following error when fetching from resource =>
                    ${JSON.stringify(urlErrors, null, 2)}`
                );
            }
        }
    };

    componentWillMount() {
        let { options } = this.props;
        let { url } = options;

        if (url) {
            callApi(url).then(response => response.json())
                .then(response => this.setState({ urlOptions: response }));
        }

        this.setDataSource();
    }

    render() {
        let { displayName, placeholder, error, touched, active, help, onBlur } = this.props;
        let errors = (touched || active)? error : null;
        let { source } = this.state;
        let helpBlock = null;

        if (help) {
            helpBlock = (
                <h5 style={{color: "#9e9e9e"}}>
                    {help}
                </h5>
            )
        }

        console.info("This is the source array => " + JSON.stringify(source, null, 2));
        console.info("AutoComplete - This are the props => " + JSON.stringify(Object.keys(this.props), null, 2));

        return (
            <div>
                <AutoComplete
                    filter={AutoComplete.caseInsensitiveFilter}
                    errorText={errors}
                    floatingLabelText={displayName}
                    dataSource={source}
                    hintText={placeholder}
                    onNewRequest={this.onChange}
                    onBlur={onBlur}
                    floatingLabelFixed
                    fullWidth
                    animated
                    openOnFocus
                />
                {helpBlock}
            </div>
        )
    }
}

Lookup.propTypes = {
    options: PropTypes.any.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    displayName: PropTypes.string,
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    help: PropTypes.string
};

export default Lookup;