import React, {Component, PropTypes} from 'react';
import LiveSchemaEditorForm from './LiveSchemaEditorForm';
import presets from '../presets';
import _ from 'underscore';
import psjon from '../../package.json';
import { AutoForm } from 'redux-autoform';
import { EditComponentFactory, DetailsComponentFactory } from '../../src/index';
import ButtonToolbar from './ButtonToolbar';
import FormOptions from './FormOptions';
import { Link } from 'react-router';
import { Toolbar, ToolbarGroup, ToolbarTitle, RaisedButton, Paper, Card } from 'material-ui';

class LiveSchemaEditor extends Component {
    static propTypes = {
        preset: PropTypes.string,
        formOptions: PropTypes.object.isRequired,
        formOptionsActions: PropTypes.object.isRequired
    };

    getAutoFormProps(formName, initialValues) {
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
            onSubmit: (...args) => console.log(args)
        };
    }

    /**
     * Renders an exception box
     * @param ex
     * @returns {XML}
     */
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

    // getUnderDevelopmentAlert = () => {
    //     let { formOptions } = this.props;
    //
    //     if (formOptions.componentFactory == 'details') {
    //         return (
    //             <Alert bsStyle="danger">
    //                 <p><b>Experimental feature</b></p>
    //                 <p>Details forms are still under development. For now, it's just a lot of Static components instead of
    //                     editing components. Also,
    //                     it only works when the field doesn't explicitly specify the component, and it does'nt work for all types. Arrays,
    //                     for instance, are still not supported.</p>
    //             </Alert>
    //         );
    //     }
    //
    //     return null;
    // };

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

    getPresetObject = () => {
        let { preset } = this.props;

        preset = preset || 'default';
        return _.find(presets, p => p.name == preset);
    };

    render() {
        let { reduxFormActions, preset, metaForm, formOptions, formOptionsActions } = this.props;

        return (
            <div>
	            <Paper zDepth={1}>
	                <Toolbar>
		                <ToolbarTitle text={`redux-autoform-material-ui demo ${psjon.version}`}/>
		                <ToolbarGroup lastChild>
			                <RaisedButton label="Documentation" secondary>
				                <Link to="https://github.com/redux-autoform/redux-autoform/blob/master/docs-md/documentation.md"/>
			                </RaisedButton>
			            </ToolbarGroup>
	                </Toolbar>
	            </Paper>
	            <h2>
		            <a target="_blank" href="https://github.com/redux-autoform/redux-autoform-material-ui"
		               style={{color: 'black'}}>
			            <i className="fa fa-github" aria-hidden="true"/>
		            </a>
	            </h2>
	            <div className='row'>
		            <div className="col-md-5">
	                    <Card>
	                        <LiveSchemaEditorForm
		                        formOptionActions={formOptionsActions}
		                        reduxFormActions={reduxFormActions}
		                        selectedPreset={preset}
		                        initialValues={this.getPresetObject()}
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
	                                    {this.getAutoform()}
	                                </div>
	                            </div>
	                        </div>
	                    </Card>
		            </div>
                </div>
            </div>
        )
    }
}

export default LiveSchemaEditor;