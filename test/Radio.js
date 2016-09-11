import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Radio from '../src/components/field/Radio';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<Radio/> Component", () => {
    it("Radio instance is not null", () => {
        const wrapper = shallow(<Radio />);
        expect(wrapper).to.not.equal('null')
    });
});