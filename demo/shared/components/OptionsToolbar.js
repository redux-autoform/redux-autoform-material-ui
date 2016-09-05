import React, { Component, PropTypes } from 'react';
import { FlatButton, Toolbar, ToolbarGroup } from 'material-ui';

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
				            <FlatButton
								label="Update"
								onClick={ () => updateForm(editorSchema) }
							/>
				            <FlatButton
								label="Stacked"
                                disabled={fieldLayout !== 'stacked'}
								onClick={ () => setStackedFieldLayout() }
							/>
				            <FlatButton
								label="Inline"
                                disabled={fieldLayout !== 'inline'}
								onClick={ () => setInlineFieldLayout() }
							/>
				            <FlatButton
								label="Edit"
								disabled={componentFactory !== 'edit'}
								onClick={ () => setEditComponentFactory() }
							/>
				            <FlatButton
								label="Details"
								disabled={componentFactory !== 'details'}
								onClick={ () => setDetailsComponentFactory() }
							/>
		                </ToolbarGroup>
		            </Toolbar>
		        </div>
	        </div>
        );
    }
}

export default FormOptions;