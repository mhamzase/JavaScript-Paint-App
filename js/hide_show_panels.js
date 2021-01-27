localStorage.setItem("viewToolbarCheck","appear");

function toolBoxArea(){
      let toolbar_dropdown = document.getElementById("view-toolbar-dropdown");
      let tools = document.querySelector(".tools");
      
      if(localStorage.getItem("viewToolbarCheck") == "appear")
      {
            localStorage.setItem("viewToolbarCheck","disappear");
            tools.style.display = "none"
            toolbar_dropdown.childNodes[2].style.display = "none";
            return;
      }
      if(localStorage.getItem("viewToolbarCheck") == "disappear")
      {
            localStorage.setItem("viewToolbarCheck","appear");
            tools.style.display = "block"
            toolbar_dropdown.childNodes[2].style.display = "inline";
      }
      
}     