require("dotenv").config()
const port = process.env.BACKEND_PORT || 5000
const { app } = require("./app");
const authRouter = require("./routes/authRouter.js");

app.use("/auth", authRouter);

app.get("/hi", (req, res) => {
  res.send("Hello World");
})

app.listen(port, () => {
  console.log(`My Server running on port ${port}`)
})