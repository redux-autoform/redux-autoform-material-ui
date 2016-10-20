import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TabGroup from '../src/components/group/TabGroup';

describe("<TabGroup/> Component", () => {
    it("TabGroup instance is not null", () => {
        const props = {
            layout: {
                groups: []
            },
            fields: [],
            componentFactory: {}
        };

        const wrapper = shallow(<TabGroup {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});