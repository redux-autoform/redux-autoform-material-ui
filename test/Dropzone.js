import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import DropZone from '../src/components/common/DropZone';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<DropZone/> Component", () => {
    it("DropZone instance is not null", () => {
        const wrapper = shallow(<DropZone />);
        expect(wrapper).to.not.equal('null')
    });
});