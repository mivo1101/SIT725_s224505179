function changeText() {
    var textsArray = ["Mi Vo", "s224505179", "Master of Information Technology", "Deakin University"]
    var number = getRandomNumberBetween(0, textsArray.length - 1)
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML = textsArray[number];
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function sendToServer() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;

    const response = await fetch("/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ a, b })
    });

    const data = await response.json();

    if (data.error) {
        console.log(data.error)
        document.getElementById("postResponse").innerText = data.error
        return;
    }
    console.log(data.message)
    document.getElementById("postResponse").innerText = data.message
}

async function getFromServer() {

    const response = await fetch("/result", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();

    if (data.error) {
        document.getElementById("result").innerText = "Error: " + data.error;
        return;
    }

    document.getElementById("result").innerText =
        "The answer is: " + data.result;
}
