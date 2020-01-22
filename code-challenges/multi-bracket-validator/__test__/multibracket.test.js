'use strict';

const Validator = require('../multibracket');


describe('Tests for the multi-bracket validator', ()=>{
  it('should return false when a single } is passed', ()=>{
    const validator = new Validator();
    expect(validator.isValid('}')).toBeFalsy();
  });

  it('should return false when a single ) is passed', () => {
    const validator = new Validator();
    expect(validator.isValid(')')).toBeFalsy();
  });

  it('should return false when a single ] is passed', () => {
    const validator = new Validator();
    expect(validator.isValid(']')).toBeFalsy();
  });

  it('should return false when a single { is passed', () => {
    const validator = new Validator();
    expect(validator.isValid('{')).toBeFalsy();
  });


  it('should return false when a single [ is passed', () => {
    const validator = new Validator();
    expect(validator.isValid('[')).toBeFalsy();
  });

  it('should return true when [(())] is passed', () => {
    const validator = new Validator();
    expect(validator.isValid('[(())]')).toBeTruthy();
  });

  it('should return true when []{}()david is passed', () => {
    const validator = new Validator();
    expect(validator.isValid('[]{}()david')).toBeTruthy();
  });


  it('should return true when [((bracket))] is passed', () => {
    const validator = new Validator();
    expect(validator.isValid('[((bracket))]')).toBeTruthy();
  });

  




  
});