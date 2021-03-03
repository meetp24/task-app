const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const multer = require('multer')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word Document'))
//         }
//         // cb(new Error('File must be a PDF'))
//         cb(undefined, true)
//         // cb(undefined, false)
//     }
// })

// app.post('/upload', upload.single('upload'), (req,res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })

// app.use((req, res, next) => {
//     if(req.method == 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next();
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon')
// })


// const myFunction = async() => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token);

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data);
// }

// myFunction()

// const main = async () => {
//     // const task = await Task.findById('603730a0d555ac2794628805')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner); 

//     const user = await User.findById('603743d5675d9e0c48aaab40')
//     await user.populate('tasks').execPopulate()
//     //console.log(user.tasks);

// }

// main()