import React, { Component, PropTypes } from 'react';
import BaseGroup from './BaseGroup';

class Group extends BaseGroup {

    getHeader = () => {
        let {layout} = this.props;
        let header = null;

        if (layout.title) {
            header = (
                <header className="metaform-group-header">
                    <span className="metaform-group-title">
                        {layout.title}
                    </span>
                </header>
            );
        }

        return (!layout.headLess)? header : null;
    };

    render() {
        let header = this.getHeader();
        let content = this.getContent();

        return (
            <section>
                <div className="row">
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

Group.propTypes = {
    component: PropTypes.string,
    fields: PropTypes.array.isRequired,
    layout: PropTypes.object.isRequired,
    componentFactory: PropTypes.object.isRequired
};

export default Group;