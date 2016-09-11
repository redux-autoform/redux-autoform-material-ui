import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Number from '../src/components/field/Number';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<Number/> Component", () => {
    it("Number instance is not null", () => {
        const wrapper = shallow(<Number />);
        expect(wrapper).to.not.equal('null')
    });
});