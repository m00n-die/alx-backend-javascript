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

describe("Available Payments Page", function() {
  it("check status code for url", function() {
	  request.get("http://localhost:7865/available_payments", (err, res, body) => {
	    if (err) {
		    expect(res.statusCode).to.not.equal(200);
	    } else {
		    expect(res.statusCode).to.equal(200);
	    }
	  });
  });
    
  it("check body content for url", function() {
	  const option = {json: true};
	  const payLoad = {
	    payment_methods: {
		    credit_cards: true,
		    paypal: false
	    }
	  }
	  request.get("http://localhost:7865/available_payments", option, (err, res, body) => {
	    if (err) {
		expect(res.statusCode).to.not.equal(200);
	  } else {
		expect(body).to.deep.equal(payLoad);
	  }
	  });
  });
});

describe("Login", function() {
  it("check status code", function(done) {
	const pam = {
	  url: "http://localhost:7865/login",
	  json: true,
	  body: {
	    userName: 'JOE'
	  }
	  };
	request.post(pam, function(err, res, body) {
	  expect(res.statusCode).to.equal(200);
	  done();
	  });
  });
    
  it("check content", function(done) {
	const opts = {
	  url: "http://localhost:7865/login",
	  json: true,
	  body: {
		  userName: 'JOE'
	  }
	};
	request.post(opts, function(err, res, body) {
	    if (err) {
		expect(res.statusCode).to.not.equal(200);
	    } else {
		expect(body).to.contain('Welcome JOE');
	    }
	    done();
	  });
  });
    
  it("check status code", function(done) {
	const lop = {
	  url: "http://localhost:7865/login",
	  json: true,
	  body: {
		  usame: 'JOE'
	  }
	};
	request.post(lop, function(err, res, body) {
	  expect(res.statusCode).to.equal(404);
	  done();
	  });
  });
});