const { expect } = require("chai");
const request = require("request");
let { app, addTwoNumbers } = require("../server");

describe("Calculator 6.2C", function() {

    // Unit Testing (Calculation Function)
    describe("Unit Tests: addTwoNumbers function", function() {
        // Test 1: Positive numbers
        it("should return correct sum for two positive numbers", function() {
            let result = addTwoNumbers(5, 10);
            expect(result).to.equal(15);
        });
        // Test 2: Positive numbers
        it("should correctly handle negative numbers", function() {
            let result = addTwoNumbers(-5, -10);
            expect(result).to.equal(-15);
        });
        // Test 3: Invalid inputs
        it("should return null for non-numeric input", function() {
            let result = addTwoNumbers(10, "mi");
            expect(result).to.be.null;
        });
    });

    // Integration Testing (REST API)
    describe("Integration Tests: API Endpoints", function() {
        let baseUrl = "http://localhost:3000";
        let server;

        before(function() {
            server = app.listen(3000);
        });
        after(function() {
            server.close();
        });

        // Test 4: Valid data (Status 200)
        it("POST /calculate should return status 200 for valid input", function(done) {
            request.post({
                url: baseUrl + "/calculate",
                json: { a: 10, b: 20 }
            }, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body.result).to.equal(30);
                expect(body.message).to.equal("Numbers received!");
                done();
            });
        });

        // Test 5: Invalid data (Status 400)
        it("POST /calculate should return status 400 for invalid input", function(done) {
            request.post({
                url: baseUrl + "/calculate",
                json: { a: "invalid", b: 20 }
            }, function(error, response, body) {
                expect(response.statusCode).to.equal(400);
                done();
            });
        });
    });
});