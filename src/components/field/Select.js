import React, {Component, PropTypes} from 'react';

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

    // getOptions = () => {
    //     let {options} = this.props;
    //
    //     return options.map((item, index) => (
    //         <option key={index} value={item.value}>
    //             {item.text}
    //         </option>
    //     ));
    // };
    //
    // render() {
    //     return <Input componentClass="select" {...this.props}>
    //         { this.getOptions() }
    //     </Input>
    // }
}

export default Select;