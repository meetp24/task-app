// CRUD - Create Read Update Delete


// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const objectID = mongodb.objectID

const { MongoClient, ObjectID } =  require('mongodb')

const connectionURL =  'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('users').deleteMany({
    //     age: 22
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("602411ee23ed571f147153db")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').findOne( { _id: new ObjectID("60241549e8225e07087aeeee") }, (error, task) => {
    //     console.log(task);
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks);
    // })

    // db.collection('users').find({ age: 21 }).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({ age: 21 }).count((error, count) => {
    //     console.log(count);
    // })

    // db.collection('users').findOne({name: 'Meet', age: 1}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch documents!');
    //     }

    //     console.log(user);
    // })

    // db.collection('users').insertOne({
    //     name: 'Meet',
    //     age: 21
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Meet',
    //         age: 21
    //     },
    //     {
    //         name: 'Krish',
    //         age: 15
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert tasks!')
    //     }

    //     console.log(result.ops);
    // })
})