var buttonMainID = document.getElementById('buttonMain');
var score = 1;
var xpos = 500;
var ypos = 300;

buttonMainID.addEventListener('click', moveBtn);
function moveBtn(){
    xpos = getxpos();
    ypos = getypos();
    buttonMainID.style.marginLeft = xpos;
    buttonMainID.style.marginTop = ypos;
    score += 1;
    console.log(xpos,ypos);
}

function getxpos(){
    xpos = Math.floor((Math.random() * (1000-40)));
    xpos = xpos.toString() + 'px';
    return xpos;
}
function getypos(){
    ypos = Math.floor((Math.random() * (600 -40)));
    ypos = ypos.toString() + 'px';
    return ypos;
}

function getScore(){
    return score;
}