const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");


cookie.onclick = function() {
    cookie.width = ++clickerCounter.textContent % 2 ? 150 : 200;
    cookie.height = cookie.width
}
