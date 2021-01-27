

function changeAppearance(){
      let appearanceMode = localStorage.getItem("viewToolbarCheck");
      if(appearanceMode == "appear")
      {
            localStorage.setItem("viewToolbarCheck","disappear");
            toolBoxArea();
            return;
      }
      localStorage.setItem("viewToolbarCheck","appear");
      toolBoxArea();
}


function toolBoxArea(){
      let toolbar_dropdown = document.getElementById("view-toolbar-dropdown");
      let toolSide = document.querySelector(".toolbox");
      
      if(localStorage.getItem("viewToolbarCheck") == "disappear")
      {
            toolSide.style.display = "none";
            toolbar_dropdown.childNodes[2].style.display = "none";
            return false;
      }
      toolSide.style.display = "block";
      toolbar_dropdown.childNodes[2].style.display = "inline";
}     