const app = require("../app")
const supertest = require("supertest")

test("GET /hello", async() => {
	let url = "/hello"
	const init = await supertest(app).get(url)
	await supertest(app).get("/hello")
		.expect(200)
		.then((res) => {
			expect(res.text).toBe("Hello stranger!")
		})
})

test("GET /hello?name=Jerry Smith", async() => {
	let url = "/hello?name=Jerry Smith"
	const init = await supertest(app).get(url)
	await supertest(app).get(url)
		.expect(200)
		.then((res) => {
			expect(res.text).toBe("Hello Jerry Smith!")
		})
})
