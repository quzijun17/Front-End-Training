document.getElementById('left_button').addEventListener('click',left_event());
document.getElementById('right_button').addEventListener('click',right_event());
document.getElementById('pause_button').addEventListener('click',function(){
    clearInterval(time);
})

var time

function left_event() {
    var lbox = document.querySelector('#left_box').value;
    var rbox = document.querySelector('#right_box').value;
    document.querySelector('#right_box').value = rbox;
    lbox = lbox.slice(0);
    document.querySelector('#left_box').value = lbox;
    if (lbox.length != 0) {
        time = setInterval(left_event,1000);
    }
}

function right_event() {
    var lbox = document.querySelector('#left_box').value;
    var rbox = document.querySelector('#right_box').value;
    lbox = rbox[rbox.length-1] + lbox;
    document.querySelector('#left_box').value = lbox;
    rbox = rbox.slice(0, rbox.length-1);
    document.querySelector('#right_box').value = rbox;
    if (rbox.length != 0){
        time = setInterval(right_event,1000);
    }
}