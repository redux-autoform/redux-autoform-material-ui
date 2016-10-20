import React, { Component, PropTypes } from 'react';
import BaseGroup from './BaseGroup';

class Group extends BaseGroup {
    render() {
        return (
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="metaform-group">
                            <div className="col-md-12" style={{marginTop: "10px"}}>
                                {this.getHeader()}
                            </div>
                            <div className="metaform-group-content">
                                {this.getContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

Group.propTypes = {
    component: PropTypes.string,
    fields: PropTypes.array.isRequired,
    layout: PropTypes.object.isRequired,
    componentFactory: PropTypes.object.isRequired
};

export default Group;