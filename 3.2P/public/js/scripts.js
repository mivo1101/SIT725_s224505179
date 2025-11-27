const clickMe = () => {
    alert("Thanks for clicking me!")
}

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

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = 
        '<div class="col s4 center-align">'+
            '<div class="card medium">'+
                '<div class="card-image waves-effect waves-block waves-light">'+
                    '<img class="activator" src="'+item.image+'">'+
                '</div>'+
                '<div class="card-content">'+
                    '<span class="card-title activator grey-text text-darken-4">'+item.title+
                        '<i class="material-icons right">more_vert</i>'+
                    '</span>'+
                    '<p><a href="#">'+item.link+'</a></p>'+
                '</div>'+
                '<div class="card-reveal">'+
                    '<span class="card-title grey-text text-darken-4">'+item.title+
                        '<i class="material-icons right">close</i>'+
                    '</span>'+
                    '<p class="card-text">'+item.description+'</p>'+
                '</div>'+
            '</div>'+
        '</div>';
        
        $("#card-section").append(itemToAppend)
    });
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log("Form Data Submitted: ", formData);
}

$(document) .ready(function() {
    $('.materialboxed') .materialbox();
    $('#formSubmit') .click(()=>{
        submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
});