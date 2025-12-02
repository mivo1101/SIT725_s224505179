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

const cardList = [
    {
        title: "Non La",
        image: "images/nonla.jpg",
        link: "About Non La",
        description: "Non La is a traditional, iconic Vietnamese hat, handcrafted from palm leaves and bamboo, used primarily to shield the wearer from the sun and rain."
    },
    {
        title: "Ao Dai",
        image: "images/aodai (1).jpeg",
        link: "About Ao Dai",
        description: "Ao Dai is the elegant and iconic national garment of Vietnam. It is a powerful cultural symbol that embodies the grace, beauty, and national pride of the Vietnamese people."
    },
    {
        title: "Ha Noi",
        image: "images/hanoi.webp",
        link: "About Ha Noi",
        description: "Hanoi is the vibrant capital city of Vietnam, blending over a thousand years of history with bustling streets, ancient temples, and a world-renowned culinary scene."
    }
];

Project.insertMany(cardList)
    .then(() => {
        console.log("Card list saved!");
        mongoose.connection.close();
    })
    .catch(err => console.error(err));