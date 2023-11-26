const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;

describe('sendPaymentRequestToAPI', function() {
  beforeEach("set up a sinon spy", function() {
    sinon.spy(console, "log");
  });
  
  afterEach("restore the spy", function() {
    console.log.restore();
  });
  
  it("Verify that the console is logging the string The total is: 120", function() {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
  });
  
  it("Verify that the console is logging the string The total is: 20", function() {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
  });
});