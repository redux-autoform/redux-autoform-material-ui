import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FileInfo from '../src/components/common/FileInfo';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<FileInfo/> Component", () => {
    it("FileInfo instance is not null", () => {
        const props = {
            file: {}
        };

        const wrapper = shallow(<FileInfo {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});