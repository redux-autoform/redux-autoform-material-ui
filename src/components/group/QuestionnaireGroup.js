import React, { Component, PropTypes } from 'react';
import BaseGroup from './BaseGroup';
import { LinearProgress } from 'material-ui';
import Arrays from '../../util/Arrays';

class QuestionnaireGroup extends BaseGroup {

    state = {
        percentage: 0
    };

    filterValues = (fields) => {
        let arr = Arrays.mergeJson(fields.map(field => {
            let { value, name } = field.reduxFormProps;
            return (value && value !== '')? {[name]: value} : null;
        }));

        return Object.keys(arr);
    };

    calculatePercentage = (fields) => {
	    let { length } = this.props.fields;
        let filteredValues = this.filterValues(fields);

        this.setState({
            percentage: ((filteredValues.length * 100) / length)
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

        return (
            <section>
                <div className="row">
                    <div className="container-fluid" style={{ marginTop: "10px" }}>
                        <h5>{`The currently progress is ${percentage} %`}</h5>
                        <LinearProgress value={percentage} min={0} max={100} mode="determinate" style={{ height: "10px" }}/>
                    </div>
                    <div className="metaform-group">
                        <div className="col-md-12" style={{marginTop: "10px"}}>
                            {this.getHeader()}
                        </div>
                        <div className="metaform-group-content">
                            {this.getContent()}
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