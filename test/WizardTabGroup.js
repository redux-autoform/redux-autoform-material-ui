import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import WizardTabGroup from '../src/components/group/WizardTabGroup';

describe("<WizardTabGroup/> Component", () => {
    it("WizardTabGroup instance is not null", () => {
        const props = {
            layout: {
                groups: []
            },
            fields: [],
            componentFactory: {}
        };

        const wrapper = shallow(<WizardTabGroup {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});