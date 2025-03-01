const express = require('express')
const app     = express()

const userRouter = require('./Users/user.router');

app.use(express.json());
app.use('/api', userRouter);

const port    = 3000


app.listen(port, () => {
    console.log(`Server running on port : ${port}`)
})