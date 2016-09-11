import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Select from '../src/components/field/Select';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<Select/> Component", () => {
    it("Select instance is not null", () => {
        const wrapper = shallow(<Select />);
        expect(wrapper).to.not.equal('null')
    });
});