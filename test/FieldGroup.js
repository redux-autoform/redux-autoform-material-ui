import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FieldGroup from '../src/components/field/FieldGroup';

describe("<FieldGroup/> Component", () => {
    it("FieldGroup instance is not null", () => {
        const props = {
            _extra: {
                layout: {
                    groups: [
                        {
                            name: ""
                        }
                    ]
                }
            },
            group: "",
            fields: [],
            componentFactory: {
                buildGroupComponent: () => {}
            }
        };

        const wrapper = shallow(<FieldGroup {...props}/>);
        expect(wrapper).to.not.equal('null')
    });
});