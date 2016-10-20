import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FileUpload from '../src/components/field/FileUpload';

describe("<FileUpload/> Component", () => {
    it("FileUpload instance is not null", () => {
        const props = {
            url: "",
            onChange: () => {}
        };

        const wrapper = shallow(<FileUpload {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});