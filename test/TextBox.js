import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TextBox from '../src/components/field/TextBox';

describe("<ChipBox/> Component", () => {
    it("ChipBox instance is not null", () => {
        const wrapper = shallow(<TextBox />);
        expect(wrapper).to.not.equal('null')
    });
});