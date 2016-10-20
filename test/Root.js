import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Root from '../src/components/common/Root';

describe("<Root/> Component", () => {
    it("Root instance is not null", () => {
        const props = {
            handleSubmit: () => {}
        };

        const wrapper = shallow(<Root {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});