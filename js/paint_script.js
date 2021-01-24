function move_toolbox(){
    let toolbox=document.querySelector(".toolbox");
    let moveIcon=document.querySelector("#moveIcon");
    if(toolbox.classList.contains("toolbox-maximize")){
    moveIcon.classList.remove("fa-angle-double-left");
    moveIcon.classList.add("fa-angle-double-right");
    toolbox.classList.remove('toolbox-maximize');
    toolbox.classList.add('toolbox-minimize');
    return;
    }
    moveIcon.classList.add("fa-angle-double-left");
    moveIcon.classList.remove("fa-angle-double-right");
    toolbox.classList.add('toolbox-maximize');
    toolbox.classList.remove('toolbox-minimize');    
}
var canvas = document.getElementById("paintcanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
