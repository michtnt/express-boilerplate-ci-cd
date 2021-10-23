const chai = require('chai');
const expect = chai.expect;

describe('Calculator', () => {
  describe('Addition', () => {
    it('1 + 1 should be equals to 2', () => {
      expect(1 + 1).to.equal(2);
    });
    it('should sum two numbers', () => {
      expect(2 + 2).to.equal(4);
      expect(50 + 39).to.equal(89);
      expect(-31 + 32).to.equal(1);
      expect(10000 + 89999).to.equal(99999);
    });
  });

  describe('Subtraction', () => {
    it('1 - 1 should be equals to 0', () => {
      expect(1 - 1).to.equal(0);
    });
    it('should subtract two numbers', () => {
      expect(6 - 2).to.equal(4);
      expect(50 - 39).to.equal(11);
      expect(-31 - 32).to.equal(-63);
      expect(10000 - 89999).to.equal(-79999);
    });
  });

  describe('Multiplication', () => {
    it('1 * 1 should be equals to 1', () => {
      expect(1 * 1).to.equal(1);
    });
    it('should multiply two numbers', () => {
      expect(3 * 2).to.equal(6);
      expect(50 * 39).to.equal(1950);
      expect(-31 * 32).to.equal(-992);
      expect(-5 * -2).to.equal(10);
    });
  });

  describe('Division', () => {
    it('1 / 1 should be equals to 1', () => {
      expect(1 / 1).to.equal(1);
    });
    it('should divide two numbers', () => {
      expect(4 / 2).to.equal(2);
      expect(50 / 5).to.equal(10);
      expect(-15 / 2).to.equal(-7.5);
    });
    it('should return Infinity if the denominator is zero', () => {
      expect(4 / 0).to.equal(Infinity);
      expect(50 / 0).to.equal(Infinity);
      expect(-15 / 0).to.equal(-Infinity);
    });
  });
});
