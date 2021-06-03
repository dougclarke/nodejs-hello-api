const app = require("./app.js")
const port = 9000

app.listen(port, () => {
	console.log(`Simple API app listening at http://localhost:${port}`)
})

