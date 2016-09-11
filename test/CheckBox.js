import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CheckBox from '../src/components/field/CheckBox';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<CheckBox/> Component", () => {
    it("CheckBox instance is not null", () => {
        const wrapper = shallow(<CheckBox />);
        expect(wrapper).to.not.equal('null')
    });
});