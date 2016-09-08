import React, { Component, PropTypes } from 'react';
import { AutoComplete } from 'material-ui';
import callApi from '../../util/FetchUtils';

class Lookup extends Component {
    state = {
        urlOptions: [],
        urlErrors: null,
        source: []
    };

    onNewRequest = (text, index) => {
        let { onChange, options } = this.props;
        let { valueKey } = options;
        let { source } = this.state;
        let item = null;

        if (index !== -1) {
            item = source[index][valueKey];
        }

        onChange(item);
    };

    onUpdateInput = (searchText, dataSource) => {
        let { onChange, options } = this.props;
        let { labelKey, valueKey } = options;

        let item = dataSource.find(item => {
            if (item[labelKey] === searchText) {
                return item[valueKey];
            }

            return {};
        });

        onChange(item);
    };

    setDataSource = () => {
        let { options } = this.props;
        let { url, labelKey, valueKey } = options;
        let { urlOptions, urlErrors } = this.state;

        if (Array.isArray(options)) {
            this.fillDataSource(options);
        }
        else if (url && labelKey && valueKey) {
            if (Array.isArray(urlOptions)) {
                this.fillDataSource(urlOptions, labelKey, valueKey);
            }
            else if (urlErrors) {
                console.error(
                    `Select - There was the following error when fetching from resource =>
                    ${JSON.stringify(urlErrors, null, 2)}`
                );
            }
        }
    };

    fillDataSource = (arr, label = 'label', value = 'value') => {
        let source = arr.map(item => ({
            text: item[label],
            value: item[value]
        }));

        this.setState({source: source});
    };

    componentWillMount() {
        let { options } = this.props;
        let { url } = options;

        if (url) {
            callApi(url)
                .then(response => response.json())
                .then(response => {
                    this.setState({ urlOptions: response });
                    this.setDataSource();
                });
        }
        else {
            this.setDataSource();
        }
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

        console.info("AutoComplete - This are the props => " + JSON.stringify(Object.keys(this.props), null, 2));

        return (
            <div>
                <AutoComplete
                    filter={AutoComplete.caseInsensitiveFilter}
                    errorText={errors}
                    floatingLabelText={displayName}
                    dataSource={source}
                    hintText={placeholder}
                    onNewRequest={this.onNewRequest}
                    onUpdateInput={this.onUpdateInput}
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