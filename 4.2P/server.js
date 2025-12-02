var express = require("express");
var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/goVietnamDB');

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});

const Project = mongoose.model('Project', ProjectSchema);
        
app.get('/api/cardList', async (req, res) => {
    const cardList = await Project.find({});
    res.json({
        statusCode: 200,
        data: cardList,
        message: "Success!"
    });
});

app.listen(port, ()=>{
    console.log("App listening to: "+port)
})