import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import DateTimePicker from '../src/components/field/DateTimePicker';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<DateTimePicker/> Component", () => {
    it("DateTimePicker instance is not null", () => {
        const wrapper = shallow(<DateTimePicker />);
        expect(wrapper).to.not.equal('null')
    });
});