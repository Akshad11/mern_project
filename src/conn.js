const mongoose = require('mongoose');
mongoose.set('strictQuery', false)

mongoose.connect("mongodb://127.0.0.1:27017/olymics").then(() => {
    console.log("connection Successful");
}).catch((e) => {
    console.log(`No Connection  ${e}`);
})