console.log('Loaded!');
//move image
var img = document.getElementById('mov');
var marginLeft = 0;
function  moveRight() {
   marginLeft +=10;
   img.style.marginLeft = marginLeft +   'px';
}
img.onclick =function() {
    var interval = setInterval(moveRight,100);
    
};