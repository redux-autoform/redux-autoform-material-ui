import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FieldGroup from '../src/components/field/FieldGroup';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<FieldGroup/> Component", () => {
    it("FieldGroup instance is not null", () => {
        const wrapper = shallow(<FieldGroup />);
        expect(wrapper).to.not.equal('null')
    });
});