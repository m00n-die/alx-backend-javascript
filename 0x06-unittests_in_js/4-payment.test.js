const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("check that calculateNumber is stubbed", function() {
	const spy = sinon.spy(console, "log");
	const stub = sinon.stub(Utils, "calculateNumber").returns(60);
	sendPaymentRequestToApi(40, 20);

	assert(spy.withArgs("The total is: 60").calledOnce);
	assert(stub.withArgs("SUM", 40, 20).calledOnce);
    });
});