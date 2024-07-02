const { expect } = require('chai');
const {
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
} = require('../index.js');

describe('Fix the Scope', () => {
  it('declare customerName to be bob in global scope', () => {
    expect(customerName).to.equal('bob');
  });

  it('upperCaseCustomerName() modifies the customerName variable', () => {
    upperCaseCustomerName();
    expect(customerName).to.equal('BOB');
  });

  it('setBestCustomer()', () => {
    setBestCustomer();
    expect(bestCustomer).to.equal('BOB');
  });

  it('overwriteBestCustomer()', () => {
    overwriteBestCustomer();
    expect(bestCustomer).to.equal('not bob');
  });

  it('changeLeastFavoriteCustomer() unsuccessfully tries to reassign the least favorite customer', () => {
    changeLeastFavoriteCustomer();
    expect(leastFavoriteCustomer).to.equal('bob');
  });
});
