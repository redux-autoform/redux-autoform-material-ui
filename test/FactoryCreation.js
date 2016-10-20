import { EditComponentFactory, DetailsComponentFactory } from '../src/index';
import { expect } from 'chai';

import TypeConstants from '../src/factory/constants/TypeConstants';

describe("Factory creation", () => {
    it("User requests an edit factory", (done) => {
        expect(EditComponentFactory.defaultFieldComponents).to.be.deep.equal(TypeConstants.edit);
        done()
    });

    it("User requests an details factory", (done) => {
        expect(DetailsComponentFactory.defaultFieldComponents).to.be.deep.equal(TypeConstants.details);
        done()
    })
});