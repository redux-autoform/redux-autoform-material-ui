import React from 'react';
import PropTypes from 'prop-types';
import AutoComplete from 'material-ui/AutoComplete/AutoComplete';

import callApi from '../../util/FetchUtils';
import FormGroup from '../common/FormGroup';
import propTypes from '../../util/FieldPropTypes';

export default class Lookup extends React.Component {
    static propTypes = propTypes;

    state = {
        dataSource: [],
        inputValue: ''
    };

    performNetworkSearch = (url) => {
        let { inputValue } = this.state;

        if (inputValue && inputValue !== '') {
            let searchUrl = url + inputValue;

            callApi(searchUrl)
                .then(response => response.json())
                .then(json => this.fillDataSourceFromRemote(json))
                .catch(err => this.showErrorInConsole(err));
        }
    };

    showErrorInConsole = (err) => {
        console.error(`There was an when fetching resources. The error was => ${err}`);
    };

    fillDataSource = (arr, label = 'label', value = 'value') => {
        let newDataSource = arr.map(item => ({
            text: item[label],
            value: item[value]
        }));

        this.setState({
            dataSource: newDataSource
        });
    };

    fillDataSourceFromLocal = () => {
        let { options } = this.props;

        if (Array.isArray(options)) {
            this.fillDataSource(options);
        }
    };

    fillDataSourceFromRemote = (json) => {
        let { options } = this.props;
        let { valueKey, labelKey, arrayKey } = options;

        if (Array.isArray(json)) {
            this.fillDataSource(json, labelKey, valueKey);
        } else {
            this.fillDataSource(json[arrayKey], labelKey, valueKey);
        }
    };

    onUpdateInput = (searchText) => {
        let { url } = this.props.options;
        let newState = {
            inputValue: searchText
        };

        if (url) {
            this.setState(newState, () => this.performNetworkSearch(url))
        } else {
            this.setState(newState, () => this.fillDataSourceFromLocal());
        }
    };

    onNewRequest = (text) => {
        let { onChange } = this.props;

        onChange(text);
    };

    componentWillMount() {
        this.fillDataSourceFromLocal();
    }

    componentWillUnmount() {
        //Reset state when this component is unmounted
        this.setState({
            dataSource: [],
            inputValue: ''
        })
    }

    render() {
        let { required, displayName, name, addonAfter, addonBefore, placeholder, error, touched, active, help, onBlur } = this.props;
        let errors = (touched || active) ? error : null;
        let { dataSource } = this.state;

        let props = {
            displayName,
            name,
            help,
            addonAfter,
            addonBefore,
            required
        };

        return (
            <FormGroup {...props}>
                <AutoComplete
                    filter={AutoComplete.caseInsensitiveFilter}
                    errorText={errors}
                    dataSource={dataSource}
                    hintText={placeholder}
                    onNewRequest={this.onNewRequest}
                    onUpdateInput={this.onUpdateInput}
                    onBlur={onBlur}
                    fullWidth
                    animated
                    openOnFocus
                />
            </FormGroup>
        )
    }
}