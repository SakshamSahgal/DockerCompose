require("dotenv").config()
const port = process.env.BACKEND_PORT || 5000
const { app } = require("./app");


app.listen(port, () => {
  console.log(`My Server running on port ${port}`)
})