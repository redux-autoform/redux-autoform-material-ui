import React, { Component, PropTypes } from 'react';

class Label extends Component {
    render() {
        let { position, text } = this.props;
        let style = null;

        if (position === 'left') {
            style = {
                float: 'left',
                width: '10em',
                marginLeft: '1em',
                textAlign: 'right'
            };
        }

        if (position === 'right') {
            style = {
                float: 'right',
                width: '10em',
                marginRight: '1em',
                textAlign: 'left'
            };
        }

        return (
            <label style={style}>
                {text}
            </label>
        );
    }
}

Label.propTypes = {
    text: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
};

export default Label;