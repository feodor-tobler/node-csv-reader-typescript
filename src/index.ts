import express from 'express'
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.status(200).send("Hello World123")
})
app.listen(port, () => console.log(`Running on port ${port}`))