const express = require("express")

const app = express()



app.get("/", (req, res) => {
  res.json({message: "Hello from express"})
})

const PORT = 3000
app.listen(PORT)



