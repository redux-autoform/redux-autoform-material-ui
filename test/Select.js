import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Select from '../src/components/field/Select';

describe("<Select/> Component", () => {
    it("Select instance is not null", () => {
        const wrapper = shallow(<Select options={[]}/>);
        expect(wrapper).to.not.equal('null')
    });
});