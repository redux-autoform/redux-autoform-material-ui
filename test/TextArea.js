import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TextArea from '../src/components/field/TextArea';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<TextArea/> Component", () => {
    it("TextArea instance is not null", () => {
        const wrapper = shallow(<TextArea />);
        expect(wrapper).to.not.equal('null')
    });
});