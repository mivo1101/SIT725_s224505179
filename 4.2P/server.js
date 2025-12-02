var express = require("express");
var app = express();

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
]

app.get('/api/cardList', (req, res) => {
    res.json({
        statusCode: 200,
        data: cardList,
        message: "Successful"
    })
})

var port = process.env.port || 3000;

app.listen(port, ()=>{
    console.log("App listening to: "+port)
})