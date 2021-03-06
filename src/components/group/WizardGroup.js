import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

import BaseGroup from './BaseGroup';
import Arrays from '../../util/Arrays';
import propTypes from '../../util/GroupPropTypes';

export default class WizardGroup extends BaseGroup {
    static propTypes = propTypes;

    // Expose functions to the user in order to make the transitions, and the field values of the form
    wizardContext = {
        fields: {},
        goToStep: (stepName) => this.toStep(stepName),
        goToPosition: (position) => this.toPosition(position),
        next: () => this.nextStep()
    };

    state = {
        position: 0,
        totalSteps: this.props.layout.groups.length - 1,
        stepFlow: []
    };

    toStep = (stepName) => {
        let steps = this.getSteps();
        let foundStep = steps.find((step) => step.name === stepName);

        if (foundStep) {
            this.trackStepFlow(foundStep.position);
            this.setState({ position: foundStep.position })
        }
        else {
            console.error(`Step ${stepName} does not exists`);
        }
    };

    toPosition = (position) => {
        let { totalSteps } = this.state;

        if (position >= 0 && position <= totalSteps) {
            this.trackStepFlow(position);
            this.setState({ position });
        }
        else {
            console.error(`Position ${position} does not exists`);
        }
    };

    // Saves an object containing the step position that started the flow and the position after that flow
    trackStepFlow = (position) => {
        let { stepFlow } = this.state;

        stepFlow.push({
            originalPosition: this.state.position,
            position
        });

        this.setState({ stepFlow });

        console.log(JSON.stringify(stepFlow));
    };

    // Get the last flow and set the step position to the step that initiated the flow to the current step position.
    backToFlow = () => {
        let { stepFlow } = this.state;
        let flowOnBack = stepFlow.pop();

        this.setState({
            stepFlow,
            position: flowOnBack.originalPosition
        })
    };

    // Checks if the current step is the last step in stepFlow, if that's the case it returns true.
    isFlowInMyPosition = () => {
        let { stepFlow, position } = this.state;
        let { length } = stepFlow;
        if (length > 0)
            return stepFlow[length - 1].position == position;

        return false;
    };

    nextStep = () => {
        let { position } = this.state;

        this.setState({ position: position + 1 })
    };

    backStep = () => {
        let { position } = this.state;

        this.setState({ position: position - 1 })
    };

    updateWizardContext = () => {
        let { fields } = this.props;

        // Reads each field value of autoform and creates an object fieldName => fieldValue.
        this.wizardContext.fields = Arrays.mergeJson(fields.map(field => ({ [field.name]: field.reduxFormProps.value })));
    };

    getButtonSection = (steps) => {
        let { position, totalSteps } = this.state;

        let { transition } = steps[position];

        let nextButton = null;
        let backButton = null;

        if (position != 0) {
            backButton = (
                <RaisedButton label="Back" onClick={this.isFlowInMyPosition() ? this.backToFlow : this.backStep} primary />
            );
        }

        if (position != totalSteps) {
            nextButton = (
                <RaisedButton label="Next" onClick={transition ? () => transition(this.wizardContext) : this.nextStep} primary />
            );
        }

        return (
            <div className="row">
                <div className="col-md-12">
                    <Toolbar style={{ backgroundColor: "#ffffff" }}>
                        <ToolbarGroup firstChild />
                        <ToolbarGroup lastChild>
                            {backButton}
                            {nextButton}
                        </ToolbarGroup>
                    </Toolbar>
                </div>
            </div>
        )
    };

    getSteps = () => {
        let { layout } = this.props;
        let content = this.getContent();

        // Maps each content to his transition function
        // Each step has associated a name and a position.
        return layout.groups.map((group, index) => ({
            content: content[index],
            transition: group.transition,
            name: group.name,
            position: index
        }));
    };

    render() {
        let { position } = this.state;
        let steps = this.getSteps();
        let buttonSection = this.getButtonSection(steps);

        this.updateWizardContext();

        return (
            <section>
                <div className="row">
                    <div className="metaform-group">
                        {steps[position].content}
                    </div>
                </div>
                {buttonSection}
            </section>
        );
    }
}