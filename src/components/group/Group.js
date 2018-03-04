import React from 'react';
import PropTypes from 'prop-types';

import BaseGroup from './BaseGroup';
import propTypes from '../../util/GroupPropTypes';

export default class Group extends BaseGroup {
    static propTypes = propTypes;

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