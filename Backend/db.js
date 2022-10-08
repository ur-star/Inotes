const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/notes'

const connectToMongo = async()=>{
await mongoose.connect(mongoURI)
.then(console.log('connected to mongoose'))
}


module.exports = connectToMongo;