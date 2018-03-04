import React from 'react';
import PropTypes from 'prop-types';

export default class Root extends React.Component {
    static propTypes = {
        children: PropTypes.array,
        handleSubmit: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="meta-form">
                <form onSubmit={this.props.handleSubmit}>
                    {this.props.children}
                </form>
            </div>
        );
    }
}