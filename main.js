var Bottom = document.querySelectorAll('.bottom-box');
var Top = document.querySelectorAll('.top-box');
for (let i = 0; i < Bottom.length; i++) {
    Bottom[i].addEventListener('click',function(){
        var ran = Math.floor(Math.random() * 3);
        if (this.getAttribute('data-box') == "left") {
            Top[ran].style.position = "absolute";
            Top[ran].style.left = '0';
            Top[ran].style.transform = "translate(0px,67vh)";
        }else if(this.getAttribute('data-box') == "center"){
            Top[ran].style.position = "absolute";
            Top[ran].style.left = '50%';
            Top[ran].style.transform = "translate(-50%,67vh)";
        }else if(this.getAttribute('data-box') == "right"){
            Top[ran].style.position = "absolute";
            Top[ran].style.right = '0';
            Top[ran].style.transform = "translate(0,67vh)";
        }
    });   
}