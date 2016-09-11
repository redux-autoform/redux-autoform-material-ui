import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TabGroup from '../src/components/group/TabGroup';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<TabGroup/> Component", () => {
    it("TabGroup instance is not null", () => {
        const props = {
            layout: {},
            fields: [],
            componentFactory: {}
        };

        const wrapper = shallow(<TabGroup {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});