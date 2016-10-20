import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import ArrayContainerItem from '../src/components/common/ArrayContainerItem';

describe("<ArrayContainerItem/> Component", () => {
    it("ArrayContainerItem instance is not null", () => {
        const props = {
            index: 0,
            onAction: () => {}
        };

        const wrapper = shallow(<ArrayContainerItem {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});