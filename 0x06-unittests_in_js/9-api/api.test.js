const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("Index Page", function() {
  const options = {
	  url: "http://localhost:7865/",
	  method: "GET"
  }
  
  it("check status code", function(done) {
	  request(options, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	  });
  });
    
  it("check content", function(done) {
    request(options, function(err, res, body) {
	    expect(body).to.contain("Welcome to the payment system");
	    done();
	  });
  });
    
  it("check the content lenght", function(done) {
	  request(options, function(err, res, body) {
	    expect(res.headers['content-length']).to.equal('29');
	    done();
	  });
  });
});

describe("Cart Page", function() {
  it("check status code for url", function(done) {
	  request.get("http://localhost:7865/cart/6", function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	  });
  });
    
  it("check content for url", function(done) {
	  request.get("http://localhost:7865/cart/6", function(err, res, body) {
	    expect(body).to.contain("Payment methods for cart 6");
	    done();
	  });
  });
    
  it("check status code for incorrect url", function(done) {
	  request.get("http://localhost:7865/cart/kim", function(err, res, body) {
	    expect(res.statusCode).to.equal(404);
	    done();
	  });
  });
});