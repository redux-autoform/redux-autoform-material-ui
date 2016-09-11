import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ArrayContainer from '../src/components/field/ArrayContainer';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<ArrayContainer/> Component", () => {
    it("ArrayContainer instance is not null", () => {
        const wrapper = shallow(<ArrayContainer />);
        expect(wrapper).to.not.equal('null')
    });
});