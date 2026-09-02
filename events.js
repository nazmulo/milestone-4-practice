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

document.getElementById('btn-post-comment').addEventListener('click', function () {

    // Get the textarea
    const commentTextBox = document.getElementById('comment-text-box');

    // Get the written comment
    const newComment = commentTextBox.value;

    // Get the comment container
    const commentContainer = document.getElementById('comment-container');

    // Create a new p element
    const commentElement = document.createElement('p');

    // Add class
    commentElement.classList.add('comment');

    // Put the comment inside p
    commentElement.innerText = newComment;

    // Add p to the container
    commentContainer.appendChild(commentElement);

    // Clear textarea
    commentTextBox.value = '';

});

// mouse mover :

//document.getElementById('btn-mouse').addEventListener('mouseenter', function(){
//    console.log('toggle')
//})

//document.getElementById('btn-mouse').addEventListener('mousemove', function(){
//    console.log('toggle')
//})

//document.getElementById('btn-mouse').addEventListener('focus', function(){
//    console.log('toggle')
//})

//document.getElementById('btn-mouse').addEventListener('keydown', function(){
//    console.log('toggle')
//})

//document.getElementById('btn-mouse').addEventListener('keyup', function(){
//    console.log('toggle')
//})