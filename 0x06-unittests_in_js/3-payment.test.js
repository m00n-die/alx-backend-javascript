const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("check that calculateNumber was called once", function() {
	const spy = sinon.spy(Utils, "calculateNumber");

	sendPaymentRequestToApi(50, 50.5);

	assert(spy.calledOnce);
	spy.restore();
    });
});