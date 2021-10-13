var supertest = require("supertest");

// This agent refers to PORT where program is runninng.

// var server = supertest.agent("http://localhost:5000");
const app = require('../index');

// UNIT test begin

describe('Testing POSTS/users endpoint', () => {
    it('respond with valid HTTP status code and description and message', async () => {
      // Make POST Request
      const response =  await supertest(app).post('/users').send({
        name: "test 2",
        email: "test1@test.com",
        dateOfBirth: "12/10/1997",
        surveys: null,
        gender: "female"
      });

      // Compare response with expectations
      expect(response.status).toBe(200);
    //   expect(response.body.status).toBe('success');
      expect(response.body.message).toBe('Yee! User Created');
    });
});


describe("Testing the user home API", () => {

	it("tests the home route and check status 200", async () => {

		const response = await supertest(app).get('/');

		expect(response.status).toBe(200);

	});

});

describe("Testing the Get all user API", () => {

	it("tests the Get all user route and check status 200", async () => {

		const response = await supertest(app).get('/users');

		expect(response.status).toBe(200);

	});

});