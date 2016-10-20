import React, { Component } from 'react';
import DevTools from '../components/DevTools';

class Layout extends Component {
    render() {
        let { children } = this.props;

        return (
            <div>
	            {children}
                <DevTools />;
            </div>
        );
    }
}

export default Layout;