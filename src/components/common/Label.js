import React from 'react';
import PropTypes from 'prop-types';

export default class Label extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired
    };

    render() {
        let style = null;

        if (this.props.position === 'left') {
            style = {
                float: 'left',
                width: '10em',
                marginLeft: '1em',
                textAlign: 'right'
            };
        }

        if (this.props.position === 'right') {
            style = {
                float: 'right',
                width: '10em',
                marginRight: '1em',
                textAlign: 'left'
            };
        }

        return (
            <label style={style}>
                {this.props.text}
            </label>
        );
    }
}