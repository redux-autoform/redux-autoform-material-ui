import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import HorizontalComponent from '../src/components/common/HorizontalComponent';

describe("<HorizontalComponent/> Component", () => {
    it("HorizontalComponent instance is not null", () => {
        const props = {
            size: 0,
            children: {}
        };

        const wrapper = shallow(<HorizontalComponent {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});