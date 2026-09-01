function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const btnMakeBlue = document.getElementById ('btn-make-blue');
btnMakeBlue.onclick = function makeBlue () {
    document.body.style.backgroundColor = "blue";
}

const btnMakePurple = document.getElementById ('btn-make-purple');
btnMakePurple.onclick = makePurple ;
function makePurple () {
    document.body.style.backgroundColor = "purple";
}

//addEventListener :
document.getElementById('btn-make-green').addEventListener('click',
    function makeGreen() {
        document.body.style.backgroundColor = 'green';
    }
)


document.getElementById('btn-make-pink').addEventListener('click',
    function () {
        document.body.style.backgroundColor = 'pink';
    }
)