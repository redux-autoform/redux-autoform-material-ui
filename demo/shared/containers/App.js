import React, { Component } from 'react';
import DevTools from '../components/DevTools';

class Layout extends Component {
    render() {
        let { children } = this.props;

        return (
            <div>
                <div className="container-fluid">
                    { children }
                </div>
                <DevTools />;
            </div>
        );
    }
}

export default Layout;