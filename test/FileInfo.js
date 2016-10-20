import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FileInfo from '../src/components/common/FileInfo';

describe("<FileInfo/> Component", () => {
    it("FileInfo instance is not null", () => {
        const props = {
            file: {
                preview: "",
                name: "awesome-file",
                size: 15,
                type: ""
            }
        };

        const wrapper = shallow(<FileInfo {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});