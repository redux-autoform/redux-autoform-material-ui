import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Radio from '../src/components/field/Radio';

describe("<Radio/> Component", () => {
    it("Radio instance is not null", () => {
        const wrapper = shallow(<Radio options={[]}/>);
        expect(wrapper).to.not.equal('null')
    });
});