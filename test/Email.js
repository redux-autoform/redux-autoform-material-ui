import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Email from '../src/components/field/Email';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<Email/> Component", () => {
    it("Email instance is not null", () => {
        const wrapper = shallow(<Email />);
        expect(wrapper).to.not.equal('null')
    });
});