const mongoose = require('mongoose');

const URI = "mongodb+srv://h79song:Thdgywls10@cluster0.oecq4.mongodb.net/Cluster0?retryWrites=true&w=majority"

const connectDB = async () => {
    await mongoose.connect(URI), {
        useUnifiedTopology: true,
        useNewUrlParser: true
    };
    console.log('server connected');
}

module.exports = connectDB;