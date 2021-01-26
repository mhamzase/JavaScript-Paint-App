let canvas_container=document.querySelector("#paintcanvas");
let paint_areas=canvas_container.getContext('2d');
function clear_surface(){
    Swal.fire({
        title: 'Do you want to save drawing?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Downlaod',
      }).then((result) => {
        if (result.isConfirmed) {
            if(window.navigator.msSaveBlob){
                window.navigator.msSaveBlob(canvas_container.msToBlob(),'canvas.png');
            }
            else{
                const a=document.createElement("a");
                document.body.appendChild(a);
                a.href=canvas_container.toDataURL('image/png');
                a.download="untitle.png";
                a.click();
                document.body.removeChild("a");
            }
            paint_areas.clearRect(0,0,canvas_container.width,canvas_container.height);

        }
      })
}
function download_drawing(){
    let file_type=document.getElementById("file_type").value;
    if(file_type=="Download as Png"){
        download_as_png();
                
    }
    else if(file_type=="Download as JPG"){
        download_as_jpg();
               
    }
    else if(file_type=="Downlaod as PDF"){
        download_as_pdf();
}

}


