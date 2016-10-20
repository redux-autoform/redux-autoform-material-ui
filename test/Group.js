import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Group from '../src/components/group/Group';

describe("<Group/> Component", () => {
    it("Group instance is not null", () => {
        const props = {
            layout: {
                groups: []
            },
            fields: [],
            componentFactory: {}
        };

        const wrapper = shallow(<Group {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});