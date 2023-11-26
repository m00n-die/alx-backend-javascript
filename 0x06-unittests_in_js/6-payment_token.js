function getPaymentTokenFromAPI(success) {
  if (success === True) {
    return new Promise((resolve) => {
      resolve({data: 'Successful response from the API' });
      });
  }
}

module.exports = getPaymentTokenFromAPI;