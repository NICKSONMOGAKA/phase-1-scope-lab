// 1. declare customerName to be bob in global scope
global.customerName = 'bob';

// 2. upperCaseCustomerName()
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. setBestCustomer()
function setBestCustomer() {
  global.bestCustomer = customerName;
}

// 4. overwriteBestCustomer()
function overwriteBestCustomer() {
  global.bestCustomer = 'not bob';
}

// 5. changeLeastFavoriteCustomer()
function changeLeastFavoriteCustomer() {
  global.leastFavoriteCustomer = 'bob';
}

// Export the functions
exports.upperCaseCustomerName = upperCaseCustomerName;
exports.setBestCustomer = setBestCustomer;
exports.overwriteBestCustomer = overwriteBestCustomer;
exports.changeLeastFavoriteCustomer = changeLeastFavoriteCustomer;
