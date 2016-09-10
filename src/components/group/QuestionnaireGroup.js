import React, { Component, PropTypes } from 'react';
import BaseGroup from './BaseGroup';
import { LinearProgress } from 'material-ui';
import Arrays from '../../util/Arrays';

class QuestionnaireGroup extends BaseGroup {

    state = {
        size: this.props.fields.length,
        percentage: 0
    };

    filterValues = (fields) => {
        let arr = Arrays.mergeJson(fields.map(field => {
            let { value, touched, name } = field.reduxFormProps;

            if (touched) {
                return (value && !(value === ''))? {[name]: value} : null
            }

            return null;
        }));

        return Object.keys(arr);
    };

    calculatePercentage = (fields) => {
        let { size } = this.state;

        let filteredValues = this.filterValues(fields);
        let completedFields = filteredValues.length;

        this.setState({
            percentage: ((completedFields * 100) / size)
        });
    };

    componentDidMount() {
        let { fields } = this.props;

        this.calculatePercentage(fields);
    }

    componentWillReceiveProps(nextProps) {
        if (!Object.is(nextProps, this.props)) {
            let { fields } = nextProps;

            this.calculatePercentage(fields);
        }
    }

    render() {
        let { percentage } = this.state;

        let header = this.getHeader();
        let content = this.getContent();

        console.info("This is the current percentage => " + percentage);

        return (
            <section>
                <div className="row">
                    <div className="container-fluid" style={{ marginTop: "10px" }}>
                        <h5>{`The currently progress is ${percentage} %`}</h5>
                        <LinearProgress value={percentage} min={0} max={100} mode="determinate" style={{ height: "10px" }}/>
                    </div>
                    <div className="metaform-group">
                        <div className="col-md-12" style={{marginTop: "10px"}}>
                            {header}
                        </div>
                        <div className="metaform-group-content">
                            {content}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

QuestionnaireGroup.propTypes = {
    component: PropTypes.string,
    fields: PropTypes.array.isRequired,
    layout: PropTypes.object.isRequired,
    componentFactory: PropTypes.object.isRequired
};

export default QuestionnaireGroup;