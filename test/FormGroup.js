import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FormGroup from '../src/components/common/FormGroup';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<FormGroup/> Component", () => {
    it("FormGroup instance is not null", () => {
        const wrapper = shallow(<FormGroup/>);
        expect(wrapper).to.not.equal('null')
    });
});