import React, { Component, PropTypes } from 'react';
import { AutoComplete } from 'material-ui';
import callApi from '../../util/FetchUtils';
import shouldComponentUpdate from '../../util/wrapUpdate';

@shouldComponentUpdate
class Lookup extends Component {
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
        let { displayName, placeholder, error, touched, active, help, onBlur } = this.props;
        let errors = (touched || active)? error : null;
        let { dataSource } = this.state;
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
                <AutoComplete
                    filter={AutoComplete.caseInsensitiveFilter}
                    errorText={errors}
                    floatingLabelText={displayName}
                    dataSource={dataSource}
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

export default Lookup;