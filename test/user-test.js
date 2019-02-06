import assert from 'assert';
import equalButton from '../equals.js';

describe('Testing equalButton', function () {
    it('Should evaluate just one number correctly', function () {
        assert.equal(equalButton.calculate('781552'), 781552);
    });
    it('Should evaluate addition correctly', function () {
        assert.equal(equalButton.calculate('50+150'), 200);
    });
    it('Should evaluate multiplication correctly', function () {
        assert.equal(equalButton.calculate('3x3'), 9);
    });
    it('Should evaluate division correctly', function () {
        assert.equal(equalButton.calculate('15/3'), 5);
    });
    it('Should evaluate subtraction correctly', function () {
        assert.equal(equalButton.calculate('63-53'), 10);
    });
    it('Should evaluate garbage correctly', function () {
        assert.equal(equalButton.calculate('Hello how are you?'), 'ERROR');
    });
    it('Should evaluate large formulae correctly', function () {
        assert.equal(equalButton.calculate('150-55+60x96-48/24+198'), 6051);
    });
    it('Should evaluate decimals in result correctly', function () {
        assert.equal(equalButton.calculate('5/3'), 5/3);
    });
    it('Should not execute malicious code', function () {
        assert.equal(equalButton.calculate('console.log("MALWARE")'), 'ERROR');
    });
});