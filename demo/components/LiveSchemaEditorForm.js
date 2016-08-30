import React, {Component, PropTypes} from 'react';
import CodeEditor from './CodeEditor';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import presets from '../presets';
import { SelectField, MenuItem, TextField } from 'material-ui';

class LiveSchemaEditorForm extends Component {
    onPresetChange = (event, index, value) => {
	    console.info(JSON.stringify(value));
        browserHistory.push(`/redux-autoform/demo.html?preset=${value}`);
    };
    
    getOptions = () => {
        return presets.map(({name, displayName}, index) => (
            <MenuItem key={index} value={name} primaryText={displayName}/>
        ));  
    };

    render() {
        const { fields: {entityName, layoutName, schema}, selectedPreset, formOptionActions } = this.props;

        return (
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-md-6">
                        <h4>Select a <span style={{color: 'red'}}>preset:</span></h4>
                    </div>
	                <div className="col-md-6">
		                <SelectField onChange={this.onPresetChange} value={selectedPreset}>
			                { this.getOptions() }
		                </SelectField>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-6">
                        <FormGroup controlId="formBasicText">
                            <ControlLabel>
                                Entity name
                            </ControlLabel>
                            <FormControl type="text" value="" placeholder="Enter text" { ... entityName }/>
                            <FormControl.Feedback />
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup controlId="formBasicText2">
                            <ControlLabel>
                                Layout name
                            </ControlLabel>
                            <FormControl type="text" value="" placeholder="Enter text" { ...layoutName }/>
                            <FormControl.Feedback />
                        </FormGroup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <h3>Schema</h3>
                            <CodeEditor { ...schema}/>
                            <FormControl.Feedback />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

LiveSchemaEditorForm.propTypes = {};

export default reduxForm({
    form: 'meta',
    fields: ['entityName', 'layoutName', 'schema']
})(LiveSchemaEditorForm);