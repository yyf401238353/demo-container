import express from 'express'
import path from 'path'

const app = express()

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname,'./index.html')))
app.use(express.static("./demo"));

app.listen(3008, () => console.log('Example app listening on port 3008!'))