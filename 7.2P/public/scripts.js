const socket = io(); 

const sendEmoji = (emoji) => {
    socket.emit('reaction', emoji);
}

socket.on('reaction', (emoji) => {
    console.log("New emoji received: ", emoji);
    
    let board = document.getElementById('board');
    board.append(emoji + " "); 
});