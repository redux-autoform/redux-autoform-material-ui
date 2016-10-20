import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TextArea from '../src/components/field/TextArea';

describe("<TextArea/> Component", () => {
    it("TextArea instance is not null", () => {
        const wrapper = shallow(<TextArea />);
        expect(wrapper).to.not.equal('null')
    });
});