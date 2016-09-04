import React, { Component } from 'react';
import LiveSchemaEditorContainer from '../container/LiveSchemaEditorContainer';

class LiveSchemaEditorPage extends Component {
    render() {
        let { location } = this.props;
        
        return <LiveSchemaEditorContainer preset={location.query.preset}/>;
    }
}

export default LiveSchemaEditorPage;
