import React, { Component } from 'react';
import LiveSchemaEditorContainer from '../containers/LiveSchemaEditorContainer';

class Demo extends Component {
    render() {
        let { location } = this.props;
        
        return <LiveSchemaEditorContainer preset={location.query.preset}/>;
    }
}

export default Demo;
