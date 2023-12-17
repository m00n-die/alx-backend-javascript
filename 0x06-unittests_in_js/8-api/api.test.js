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