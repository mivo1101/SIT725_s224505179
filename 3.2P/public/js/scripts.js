const clickMe = ()=>{
    alert("Thanks for clicking me!")
}

$(document) .ready(function() {
    $('.materialboxed') .materialbox();
    $('#clickMeButton') .click(()=>{
        clickMe();
    })
});