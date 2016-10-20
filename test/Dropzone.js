import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import DropZone from '../src/components/common/DropZone';

describe("<DropZone/> Component", () => {
    it("DropZone instance is not null", () => {
        const wrapper = shallow(<DropZone />);
        expect(wrapper).to.not.equal('null')
    });
});