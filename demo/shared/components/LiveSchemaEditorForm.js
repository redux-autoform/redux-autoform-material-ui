import React, {Component, PropTypes} from 'react';
import CodeEditor from './CodeEditor';
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import presets from '../presets/presets';
import { SelectField, MenuItem, TextField } from 'material-ui';

class LiveSchemaEditorForm extends Component {
    handleChange = (event, index, value) => {
        browserHistory.push(`/redux-autoform/demo.html?preset=${value}`);
    };
    
    getOptions = () => {
        return presets.map(({name, displayName}, index) => (
            <MenuItem key={index} value={name} primaryText={displayName}/>
        ));  
    };

    render() {
        const { fields: {entityName, layoutName, schema}, selectedPreset } = this.props;

        return (
            <div className="container-fluid">
                <div className='row'>
	                <div className="col-md-12">
		                <SelectField
			                floatingLabelText="Take a Preset from the List"
			                onChange={this.handleChange}
			                value={selectedPreset || presets[0].name}
			                fullWidth
			                floatingLabelFixed>
			                    {this.getOptions()}
		                </SelectField>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-6">
	                    <TextField
		                    floatingLabelText="Entity name"
		                    type="text"
		                    value=""
		                    hintText="Enter text"
		                    fullWidth
		                    {...entityName}
	                    />
                    </div>
                    <div className="col-md-6">
	                    <TextField
		                    floatingLabelText="Layout name"
		                    type="text"
		                    value=""
		                    hintText="Enter text"
		                    fullWidth
		                    {...layoutName}
	                    />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
	                    <h5 style={{color: "#757575"}}>Schema</h5>
                    </div>
                </div>
	            <div className="row">
		            <div className="col-md-12">
			            <CodeEditor {...schema}/>
		            </div>
	            </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'meta',
    fields: ['entityName', 'layoutName', 'schema']
})(LiveSchemaEditorForm);