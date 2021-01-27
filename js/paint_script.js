
window.onload = function(){changeTheme();}
document.onclose=function(){
    // if(confirm("Are you sure?")) return true;
    // return false;
    alert("hi");
}
function closeCurrentWindow() {
    window.close();
    
  }
let tools = document.querySelector(".tools");
let shapes = document.querySelector(".shapes");
let drawing = document.querySelector(".drawing");
let erasing = document.querySelector(".erasing");
let selectedTool = document.querySelector(".selectedTool");
let nav_bar=Array.from(document.querySelectorAll(".dropdown-menu"));
let nav_items=Array.from(document.querySelectorAll(".dropdown-item"));
let color_all=Array.from(document.querySelectorAll(".col-sm-1"));
var canvas = document.getElementById("paintcanvas");
let place_x=document.querySelector("#co-X");
let place_Y=document.querySelector("#co-Y");
let zoom_value=document.querySelector("#zoomrange");
nav_items.forEach(add_mouseHoverEvenet);
nav_items.forEach(add_mouseoOutEvenet);
color_all.forEach(add_color_opacity);
function add_mouseHoverEvenet(element){
    element.addEventListener('mouseover',function(){
        if(localStorage.getItem('theme')=='dark'){
        this.style.backgroundColor="#252525";
        return;
    }
    this.style.backgroundColor="#f8f9fa";
    this.style.color="black";
    
        
    });
}
function add_mouseoOutEvenet(element){
    element.addEventListener('mouseout',function(){
        this.style.backgroundColor="";
    });
}

function add_color_opacity(element){
    element.addEventListener('click',function(){
        this.style.opacity="1";
    });
}

tools.classList.add("styleTools");


// shapes elements when click on it 
for (let index = 1; index < shapes.children.length; index++) {
    let element = shapes.children[index];
    
    element.addEventListener("click",function(){
        let cloneElement = this.cloneNode(true);
        if(selectedTool.hasChildNodes())
        {   
            selectedTool.removeChild(selectedTool.childNodes[0]);
            selectedTool.appendChild(cloneElement);
        }
        else{
            selectedTool.appendChild(cloneElement);
        }  
    });
}



// drawing elements when click on it 
for (let index = 1; index < drawing.children.length; index++) {
    let element = drawing.children[index];
    
    element.addEventListener("click",function(){
        let cloneElement = this.cloneNode(true);
        if(selectedTool.hasChildNodes())
        {   
            selectedTool.removeChild(selectedTool.childNodes[0]);
            selectedTool.appendChild(cloneElement);
        }
        else{
            selectedTool.appendChild(cloneElement);
        }
    });
}
// erasing elements when click on it 
for (let index = 1; index < erasing.children.length; index++) {
    let element = erasing.children[index];
    
    element.addEventListener("click",function(){
        let cloneElement = this.cloneNode(true);
        if(selectedTool.hasChildNodes())
        {   
            selectedTool.removeChild(selectedTool.childNodes[0]);
            selectedTool.appendChild(cloneElement);
        }
        else{
            selectedTool.appendChild(cloneElement);
        }
    });
}

//function for toggle the width of left toolbox
function move_toolbox(){
    let toolbox=document.querySelector(".toolbox");
    let moveIcon=document.querySelector("#moveIcon");
    if(toolbox.classList.contains("toolbox-maximize")){
    moveIcon.classList.remove("bi-arrow-left-square-fill");
    moveIcon.classList.add("bi-arrow-right-square-fill");
    toolbox.classList.remove('toolbox-maximize');
    toolbox.classList.add('toolbox-minimize');
    tools.style.display = "none";
    return false;
    }
    moveIcon.classList.add("bi-arrow-left-square-fill");
    moveIcon.classList.remove("bi-arrow-right-square-fill");
    toolbox.classList.add('toolbox-maximize');
    toolbox.classList.remove('toolbox-minimize');

    setTimeout(function(){ 
        tools.style.display = "block";
     }, 1000);
    
}
//end toolbox functuin
//code for testing canvs 
var canvas = document.querySelector("#paintcanvas");
    
canvas.width=window.innerWidth;
canvas.width=window.innerHeight;
var ctx = canvas.getContext("2d");
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle="black";
ctx.fillRect(200,20,400,200);
ctx.fillStyle="rgba(100,200,0,1)";
ctx.fillRect(500,300,100,150);

ctx.fillStyle="rgba(100,200,20,0.8)";
ctx.fillRect(30,30,100,400);
ctx.moveTo(100,50);
ctx.strokeStyle="rgba(100,200,20,0.8)";
ctx.lineTo(200,100);
ctx.stroke();
//end code



function set_theme_mode(){
    current_mode=localStorage.getItem('theme');
    if(current_mode=='dark'){localStorage.setItem('theme','light');changeTheme();return;}
    localStorage.setItem('theme','dark');
    changeTheme();
}
function changeTheme(){
   let navBar=document.querySelector("#navbar");
   let toolbox=document.querySelector(".toolbox");
   let colorbar=document.querySelector(".colorbar");
   let document_body=document.querySelector("body");
   let toggleButton=document.querySelector("#modetoggle");
   let diloagbtn=document.querySelector(".dialog-bnt");
   let infoDaliobox=document.querySelector("#infodd");
   let modal=document.querySelector(".modal-content");
   if(localStorage.getItem('theme')=='dark'){
       navBar.classList.remove("bg-light");
       navBar.classList.remove("navbar-light");
       navBar.classList.add("bg-dark");
       navBar.classList.add("navbar-dark");
       toolbox.classList.remove("bg-light");
       toolbox.classList.add("bg-dark");
       toolbox.classList.add("text-white");
       colorbar.classList.remove("bg-light");
       colorbar.classList.add("bg-dark");
       colorbar.classList.add("text-white");
       document_body.classList.remove("body-bg-color-light");
       document_body.classList.add("body-bg-color-dark");
       toggleButton.classList.remove("fa-toggle-off");
       toggleButton.classList.add("white");
       toggleButton.classList.add("fa-toggle-on");
       modal.classList.add("bg-dark");
       modal.classList.add("text-white");
       diloagbtn.classList.remove("btn-primary");
       diloagbtn.classList.add("huge-black");
       diloagbtn.classList.add('text-white');
       infoDaliobox.classList.add("bg-dark");
       infoDaliobox.classList.add("text-white");


       for(let index=0;index<nav_bar.length;index++){
        nav_bar[index].classList.add('bg-dark');
          }
        for(let index=0;index<nav_items.length;index++){
            nav_items[index].classList.add('text-white');
            }
       return;
    }
    if(localStorage.getItem('theme')=='light'){
        navBar.classList.add("bg-light");
        navBar.classList.add("navbar-light");
        navBar.classList.remove("bg-dark");
        navBar.classList.remove("navbar-dark");
       toolbox.classList.add("bg-light");
       toolbox.classList.remove("bg-dark");
       toolbox.classList.remove("text-white");
       colorbar.classList.add("bg-light");
       colorbar.classList.remove("bg-dark");
       colorbar.classList.remove("text-white");
       document_body.classList.add("body-bg-color-light");
       document_body.classList.remove("body-bg-color-dark");
       toggleButton.classList.add("fa-toggle-off");
       toggleButton.classList.remove("white");
       toggleButton.classList.remove("fa-toggle-on");
       modal.classList.remove("bg-dark");
       modal.classList.remove("text-white");
       diloagbtn.classList.add("btn-primary");
       diloagbtn.classList.remove("huge-black");
       diloagbtn.classList.remove('text-white');
       infoDaliobox.classList.remove("bg-dark");
       infoDaliobox.classList.remove("text-white");
       
       
       for(let index=0;index<nav_bar.length;index++){
        nav_bar[index].classList.remove('bg-dark');
        
    }
    for(let index=0;index<nav_items.length;index++){
        nav_items[index].classList.remove('text-white');
       
        }
  
    }

}
//for bootstrap4 tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  $(function() {
    $('#toggle-two').bootstrapToggle({
      on: 'Enabled',
      off: 'Disabled'
    });
  })
//end


function draw_painting(event){
    let x=event.clientX;
    let y=event.clientY;
    place_x.innerText = x;
    place_Y.innerText=y;
}
function reset_coutn(event){
    place_x.innerText=0;
    place_Y.innerText=0;
    
}


previous_width=95;
current_value_zoom=0;
function zoom_paint_area(){
    let zoom_count=document.querySelector("#current_value");
    let scrollbar_container=document.querySelector(".paint-container");
    zoom_count.innerText=zoom_value.value;
    if(current_value_zoom<parseInt(zoom_value.value)){
        next_Width=previous_width+parseInt(zoom_value.value);
        canvas.style.width =`${next_Width}%`;
        previous_width=next_Width;
        current_value_zoom=parseInt(zoom_value.value);
        scrollbar_container.style.overflowX ="scroll";

        return;
    }
    next_Width=previous_width-parseInt(zoom_value.value);
    canvas.style.width =`${next_Width}%`;
    previous_width=next_Width;
    current_value_zoom=parseInt(zoom_value.value);
    if(parseInt(zoom_value.value)==0){
        canvas.style.width ='95%';
        current_value_zoom=0;
        scrollbar_container.style.overflowX ="hidden";
    }
    
}