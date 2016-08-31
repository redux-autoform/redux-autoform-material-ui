import React, { Component, PropTypes } from 'react';
import BaseGroup from './BaseGroup';

class Group extends BaseGroup {
    static propTypes = {
        component: PropTypes.string,
        fields: PropTypes.array.isRequired,
        layout: PropTypes.object.isRequired,
        componentFactory: PropTypes.object.isRequired
    };

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
        let {layout} = this.props;

        return (
            <section style={(layout.headLess)? { marginTop: "15px" } : null}>
                <div className="row">
                    <div className="metaform-group">
                        <div className="col-md-12">
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

export default Group;