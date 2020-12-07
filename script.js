function rndInt() {
    let rndInt = Math.floor(Math.random() * 5);
    console.log(rndInt)

let x = rndInt;
console.log(x)

const unicorn = document.createElement("img");
unicorn.setAttribute("src", "unicorn.jpg");

const art = document.createElement("img");
art.setAttribute("src", "artist.gif");    

const wife = document.createElement("img");
wife.setAttribute("src", "wife.jpg");   

const catmom = document.createElement("img");
catmom.setAttribute("src", "catmom.jpg");   

const travelpartner = document.createElement("img");
travelpartner.setAttribute("src", "travelpartner.jpg");   

var msgEl = document.getElementById("displayMsg");
msgEl.innerHTML = "";

var artEl = document.getElementById("displayMsg")
artEl.innerHTML = "";

var wifeEl = document.getElementById("displayMsg")
wifeEl.innerHTML = "";

var catmomEl = document.getElementById("displayMsg")
catmomEl.innerHTML = "";

var travelpartnerEl = document.getElementById("displayMsg")
travelpartnerEl.innerHTML = "";

if (x === 0) {
    msgEl.innerHTML = "the most beautiful unicorn in the world!";
    msgEl.appendChild(unicorn);
    } else if (x === 1) {
        msgEl.innerHTML = "an awesome artist!";
        msgEl.appendChild(art);
    } else if (x === 2) {
        wifeEl.innerHTML = "the best wife ever!";
        wifeEl.appendChild(wife);
    } else if (x === 3) {
        catmomEl.innerHTML = "the best cat mom ever!";
        catmomEl.appendChild(catmom);
    } else if (x === 4) {
        travelpartnerEl.innerHTML = "the best travel partner I could ever wish for!";
        travelpartnerEl.appendChild(travelpartner);
}};
