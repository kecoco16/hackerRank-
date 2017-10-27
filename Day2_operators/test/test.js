const expect = require('chai').expect
const app = require('../app')

describe('Operators', function() {
    it('should if it works', () => {
        const costo = 12.00
        const propina = 20
        const impuesto = 8
        const operators = new app(costo,propina,impuesto)
        // expect(result.cost).to.be.equal(costo)
        // expect(result.tip).to.be.equal(propina)
        // expect(result.tax).to.be.equal(impuesto)
    });


});