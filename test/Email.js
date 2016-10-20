import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Email from '../src/components/field/Email';

describe("<Email/> Component", () => {
    it("Email instance is not null", () => {
        const wrapper = shallow(<Email />);
        expect(wrapper).to.not.equal('null')
    });
});