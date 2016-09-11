import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Password from '../src/components/field/Password';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<Password/> Component", () => {
    it("Password instance is not null", () => {
        const wrapper = shallow(<Password />);
        expect(wrapper).to.not.equal('null')
    });
});