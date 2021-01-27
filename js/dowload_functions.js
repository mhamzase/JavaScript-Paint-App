function download_as_png(){
    const a=document.createElement("a");
    document.body.appendChild(a);
    a.href=canvas_container.toDataURL('image/png');
    a.download="drawing.png";
    a.click();
    document.body.removeChild("a");
}
function download_as_jpg(){
    const a=document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas_container.toDataURL('image/jpg');
    a.download = "drawing.jpg";
    a.click();
    document.body.removeChild("a");
}
function download_as_pdf(){
    let img = canvas_container.toDataURL('image/jpeg',1.0);
    let pdf = new jsPDF();
    pdf.addImage(img,'JPEF',0,0);
    pdf.save("drawing.pdf"); 
}
