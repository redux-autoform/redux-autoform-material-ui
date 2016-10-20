import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import QuestionnaireGroup from '../src/components/group/QuestionnaireGroup';

describe("<QuestionnaireGroup/> Component", () => {
    it("QuestionnaireGroup instance is not null", () => {
        const props = {
            layout: {
                groups: []
            },
            fields: [],
            componentFactory: {}
        };

        const wrapper = shallow(<QuestionnaireGroup {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});