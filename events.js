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

document.getElementById('btn-update-tittle')
.addEventListener('click', function () {
    const page = document.getElementById('page-tittle');
    page.innerText = 'update page tittle text';
})

document.getElementById('btn-login')
.addEventListener('click', function () {
    const userInfoEi = document.getElementById('user-info');
    userInfoEi.innerText = 'log in better';
})

//create a comment box and display comment : -

               //step-1 : set a event handler to the button

document.getElementById('btn-post-comment').addEventListener('click', function(){
              //step-2 : get the text written in the comment textarea
        const commentTextBox = document.getElementById('comment-text-box');
        const newComment = commentTextBox.value;
              // step-3 : get the parent node where to publish comment
        const commentContainer = document.getElementById('comment-container');
})