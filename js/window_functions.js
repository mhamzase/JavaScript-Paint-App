function print_drwing(){
    let toolbox=document.querySelector(".toolbox");
    toolbox.style.display="none";
    window.print();
    toolbox.style.display="block";
}

function enablefullscreen(){
    var element = document.querySelector("#paintcanvas");

element.requestFullscreen().then(function(){}).catch(function(error) {
	console.log(error.message);
});

}

function closeCurrentWindow() {
    if(confirm("Do you want to exit Paint App?"))
    {
        window.close();
    }
    
  }