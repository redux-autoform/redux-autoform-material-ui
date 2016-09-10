import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default function wrapUpdate(WrapperComponent) {
    return class ShouldUpdateComponent extends React.Component {
        shouldComponentUpdate(nextProps, nextState) {
            return shallowCompare(this, nextProps, nextState);
        }

        render() {
            return <WrapperComponent {...this.props}/>
        }
    }
};