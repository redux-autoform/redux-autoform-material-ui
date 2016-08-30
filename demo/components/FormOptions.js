import React, { Component, PropTypes } from 'react';
import { RaisedButton, Toolbar, ToolbarGroup } from 'material-ui';

class FormOptions extends Component {
    static propTypes = {
        fieldLayout: PropTypes.string.isRequired,
        setStackedFieldLayout: PropTypes.func.isRequired,
        setInlineFieldLayout: PropTypes.func.isRequired
    };
    
    render() {
        let { fieldLayout, componentFactory, setStackedFieldLayout, setInlineFieldLayout, setEditComponentFactory, setDetailsComponentFactory, updateForm, editorSchema, schema} = this.props;
            
        return (
	        <div className="container-fluid">
	            <div className="row">
		            <Toolbar>		
			            <ToolbarGroup>
				            <RaisedButton label="Update" onClick={ () => updateForm(editorSchema) } primary/>
				            <RaisedButton label="Stacked" active={fieldLayout == 'stacked'} onClick={ () => setStackedFieldLayout() } primary/>
				            <RaisedButton label="Inline" active={fieldLayout == 'inline'} onClick={ () => setInlineFieldLayout() } primary/>
				            <RaisedButton label="Edit" active={componentFactory == 'edit'} onClick={ () => setEditComponentFactory() } primary/>
				            <RaisedButton label="Details" active={componentFactory == 'details'} onClick={ () => setDetailsComponentFactory() } primary/>
		                </ToolbarGroup>
		            </Toolbar>
		        </div>
	        </div>
        );
    }
}

export default FormOptions;