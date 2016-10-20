import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import VerticalComponent from '../src/components/common/VerticalComponent';

describe("<VerticalComponent/> Component", () => {
    it("VerticalComponent instance is not null", () => {
        const props = {
            size: 0,
            children: {}
        };

        const wrapper = shallow(<VerticalComponent {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});