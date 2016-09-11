import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Lookup from '../src/components/field/Lookup';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<Lookup/> Component", () => {
    it("Lookup instance is not null", () => {
        const wrapper = shallow(<Lookup />);
        expect(wrapper).to.not.equal('null')
    });
});