var mongoose = require('mongoose');

//mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://sergiosoba:Q1oUW7NajEZkvjJQ@cluster0.0dwxx.mongodb.net/pollocampero', {useNewUrlParser: true});

var Schema = mongoose.Schema;

var ChatLineSchema = new Schema({
    username: String,
    chatLine: String
});

var ChatLine = mongoose.model('Students', ChatLineSchema);

ChatLine.create(
    {
        username: "Sergiosoba",
        chatLine: "Hello World1"
    },
    (error, chatLine) => {
        console.log("Error was: " + error);
        console.log(chatLine);
    }
);