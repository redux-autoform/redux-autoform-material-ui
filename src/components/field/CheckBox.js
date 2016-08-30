import React, { Component, PropTypes } from 'react';
import { getDisplayName } from 'redux-autoform-utils';
import Checkbox from 'material-ui/Checkbox';

//TODO JS: delete this and move to css
const styles = {
    checkbox: {
        marginTop: '0 !important',
        paddingTop: '0 !important',
        marginBottom: '10px !important'
    }
};

class CheckBox extends Component {
    getContent = () => {
        let { value, name, displayName, error, touched, onChange, onBlur } = this.props;
        let validationState = error && touched ? 'error' : null;
        let checkboxProps = { onChange, onBlur, validationState };

        return (
            <Checkbox
                label={getDisplayName(displayName, name)}
                defaultChecked={value}
                style={styles.checkbox}
                {...checkboxProps}
            />
        )
    };

    static childContextTypes = {
        muiTheme: PropTypes.object.isRequired
    };

    render() {
        let { fieldLayout } = this.props;
        let content = this.getContent();

        if (fieldLayout == 'inline') {
            return (
                <div>
                    <div className="col-fixed-140">
                        <label/>
                    </div>
                    <div className="col-xs-12 col-offset-140 no-padding-col">
                        {content}
                    </div>
                </div>
            );
        }
        else {
            return content;
        }
    }
}

export default CheckBox;