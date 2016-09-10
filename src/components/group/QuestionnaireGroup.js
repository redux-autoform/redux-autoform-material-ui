import React, { Component, PropTypes } from 'react';
import BaseGroup from './BaseGroup';
import { LinearProgress } from 'material-ui';

class QuestionnaireGroup extends BaseGroup {

    state = {
        percentage: 10
    };

    render() {
        let { percentage } = this.state;

        let header = this.getHeader();
        let content = this.getContent();

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