import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import WizardTabGroup from '../src/components/group/WizardTabGroup';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<WizardTabGroup/> Component", () => {
    it("WizardTabGroup instance is not null", () => {
        const props = {
            layout: {},
            fields: [],
            componentFactory: {}
        };

        const wrapper = shallow(<WizardTabGroup {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});