import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import QuestionnaireGroup from '../src/components/group/QuestionnaireGroup';
// import wrapUpdate from '../src/util/wrapUpdate';

describe("<QuestionnaireGroup/> Component", () => {
    it("QuestionnaireGroup instance is not null", () => {
        const props = {
            layout: {},
            fields: [],
            componentFactory: {}
        };

        const wrapper = shallow(<QuestionnaireGroup {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});