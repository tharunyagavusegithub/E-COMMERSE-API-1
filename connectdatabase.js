const mongoose = require('mongoose');

const ConnectDatabase =() =>{
    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log('MongoDB connected to host:' +con.connection.host)
        
    })

};
module.exports =ConnectDatabase;