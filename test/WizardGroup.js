import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import WizardGroup from '../src/components/group/WizardGroup';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<WizardGroup/> Component", () => {
    it("WizardGroup instance is not null", () => {
        const props = {
            layout: {},
            fields: [],
            componentFactory: {}
        };

        const wrapper = shallow(<WizardGroup {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});