const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const bcrypt = require('bcryptjs')

const app = express()
const port = process.listenerCount.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const myFunction = async() => {
    const password = 'Red123!'
    const hasedPassword = await bcrypt.hash(password, 8)

    console.log(password);
    console.log(hasedPassword);

    const isMatch = await bcrypt.compare('Red123!', hasedPassword)
    console.log(isMatch);
}

myFunction()

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})