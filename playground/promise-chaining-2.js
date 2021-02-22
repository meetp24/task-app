require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('602d548ef32b3700d00bfc51').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('60256d49e83e372178a5a755').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})