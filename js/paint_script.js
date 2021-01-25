window.onload = function(){changeTheme();}
let tools = document.querySelector(".tools");
let shapes = document.querySelector(".shapes");
let drawing = document.querySelector(".drawing");
let erasing = document.querySelector(".erasing");
let selectedTool = document.querySelector(".selectedTool");
let nav_bar=Array.from(document.querySelectorAll(".dropdown-menu"));
let nav_items=Array.from(document.querySelectorAll(".dropdown-item"));
nav_items.forEach(add_mouseHoverEvenet);
nav_items.forEach(add_mouseoOutEvenet);
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
    moveIcon.classList.remove("fa-angle-double-left");
    moveIcon.classList.add("fa-angle-double-right");
    toolbox.classList.remove('toolbox-maximize');
    toolbox.classList.add('toolbox-minimize');
    tools.style.display = "none";
    return;
    }
    moveIcon.classList.add("fa-angle-double-left");
    moveIcon.classList.remove("fa-angle-double-right");
    toolbox.classList.add('toolbox-maximize');
    toolbox.classList.remove('toolbox-minimize');
    tools.style.display = "block";
}
//end toolbox functuin
//code for testing canvs 
var canvas = document.getElementById("paintcanvas");
var ctx = canvas.getContext("2d");
// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();
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
//end


