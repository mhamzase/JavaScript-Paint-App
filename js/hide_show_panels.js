

function changeAppearanceTool(){
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






function changeAppearanceFooter(){
      let appearanceMode = localStorage.getItem("footerBarCheck");
      if(appearanceMode == "appear")
      {
            localStorage.setItem("footerBarCheck","disappear");
            FooterArea();
            return;
      }
      localStorage.setItem("footerBarCheck","appear");
      FooterArea();
}


function FooterArea(){
      let colorbar_dropdown = document.getElementById("view-colorbar-dropdown");
      let footerSide = document.querySelector(".colorbar");
      let canvasArea = document.getElementById("paintcanvas");

      if(localStorage.getItem("footerBarCheck") == "disappear")
      {
            footerSide.style.display = "none";
            colorbar_dropdown.childNodes[2].style.display = "none";
            canvasArea.style.height = "100vh";
            return false;
      }
      footerSide.style.display = "block";
      colorbar_dropdown.childNodes[2].style.display = "inline";
      canvasArea.style.height = "79vh";
}     