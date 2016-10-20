import React, {Component, PropTypes} from 'react';
import LiveSchemaEditorForm from './LiveSchemaEditorForm';
import presets from '../../client/presets/presets';
import _ from 'underscore';
import pkg from '../../../package.json';
import { AutoForm } from 'redux-autoform';
import { EditComponentFactory, DetailsComponentFactory } from '../../../src/index';
import ButtonToolbar from './SubmitToolbar';
import FormOptions from './OptionsToolbar';
import SubmitDialog from './SubmitDialog';
import { Toolbar, ToolbarGroup, ToolbarTitle, RaisedButton, Paper, Card, IconButton } from 'material-ui';

class LiveSchemaEditor extends Component {
    static propTypes = {
        preset: PropTypes.string,
        formOptions: PropTypes.object.isRequired,
        formOptionsActions: PropTypes.object.isRequired
    };

    state = {
        open: false,
        result: {}
    };

    handleResult = (args) => {
        this.setState({open: true, result: args});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    getAutoFormProps = (formName, initialValues) => {
        let { metaForm, formOptions } = this.props;

        if (!formName) throw Error('Form name cannot be empty');
        if (!metaForm) return undefined;

        let factory = (formOptions.componentFactory == 'edit')? EditComponentFactory : DetailsComponentFactory;

        return {
            form: formName,
            fieldLayout: formOptions.fieldLayout,
            buttonBar: ButtonToolbar,
            schema:  eval('(' + formOptions.schema + ')') , // eval('(' + metaForm.schema.value + ')'),
            entityName: metaForm.entityName.value,
            layoutName: metaForm.layoutName.value,
            componentFactory: factory,
            errorRenderer: this.errorRenderer,
            initialValues: initialValues,
            onSubmit: (...args) => this.handleResult(args)
        };
    };

    getErrorRenderer = (ex) => {
        return (
            <div>
                <h4>Oh snap! The configuration is not valid.</h4>
                <p>Detailed information:
                    <b>{ex.message}</b>
                </p>
            </div>
        );
    };

    getAutoform = () => {
        let { preset } = this.props;

        preset = preset || 'default';

        let presetObject = _.find(presets, p => p.name == preset);
        let autoFormProps;
        let autoForm;

        if (!presetObject) {
            throw Error(`Could not find preset. Preset name: ${preset}`);
        }

        try {
            autoFormProps = this.getAutoFormProps(preset, presetObject.initialValues);
            autoForm = autoFormProps ? <AutoForm {...autoFormProps}/> : null;
        } catch (ex) {
            autoForm = this.getErrorRenderer(ex);
        }

        return autoForm;
    };

    getInitialValues = () => {
        let { preset } = this.props;

        preset = preset || 'default';
        return _.find(presets, p => p.name == preset);
    };

    render() {
        let { reduxFormActions, preset, metaForm, formOptions, formOptionsActions } = this.props;
        let { open, result } = this.state;

	    return (
            <div>
                <SubmitDialog open={open} args={result} handleClose={this.handleClose}/>
	            <Paper zDepth={1} style={{marginBottom: "20px"}}>
	                <Toolbar>
		                <ToolbarGroup>
			                <IconButton iconClassName="fa fa-github" href="https://github.com/redux-autoform/redux-autoform-material-ui"/>
			            </ToolbarGroup>
		                <ToolbarTitle text={`Redux Autoform Material-UI Demo ${pkg.version}`}/>
		                <ToolbarGroup lastChild>
			                <RaisedButton label="Documentation" href="https://github.com/redux-autoform/redux-autoform/blob/master/docs-md/documentation.md" secondary/>
			            </ToolbarGroup>
	                </Toolbar>
	            </Paper>
	            <div className="container-fluid">
		            <div className='row'>
			            <div className="col-md-5">
				            <Card>
					            <LiveSchemaEditorForm
						            formOptionActions={formOptionsActions}
						            reduxFormActions={reduxFormActions}
						            selectedPreset={preset}
						            initialValues={this.getInitialValues()}
					            />
				            </Card>
			            </div>
			            <div className="col-md-7">
				            <Card>
					            <div className="row">
						            <div className="col-md-12">
							            <FormOptions
								            editorSchema={metaForm ? metaForm.schema.value : ''}
								            {...formOptions}
								            {...formOptionsActions}
							            />
						            </div>
					            </div>
					            <div className="row">
						            <div className="col-md-12">
							            <div className="live-schema-editor-mount-node">
								            <div className="container-fluid">
									            {this.getAutoform()}
								            </div>
							            </div>
						            </div>
					            </div>
				            </Card>
			            </div>
		            </div>
	            </div>
            </div>
        )
    }
}

export default LiveSchemaEditor;