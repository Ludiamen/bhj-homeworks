(() => {
    const inputs = document.querySelectorAll('div > .hole');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", myFunction);
    }
    function myFunction() {
        const dead = document.getElementById("dead");
        const lost = document.getElementById("lost");

        function resetScore (state) {
            alert(state);
            dead.textContent = 0;
            lost.textContent = 0;
        }

        if (dead.textContent <= 8 & lost.textContent <= 3) {
            if (this.className == "hole hole_has-mole") {
                dead.textContent++ + 1;
            } else {
                lost.textContent++ + 1;
            }
        } 

        if (dead.textContent >= 8) {
            resetScore('Вы выиграли!');
        } 
         
        if (lost.textContent >= 3){
            resetScore('Вы проиграли.');
        }
    })();