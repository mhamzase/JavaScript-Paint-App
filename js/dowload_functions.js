function download_as_png(){
    const a=document.createElement("a");
    document.body.appendChild(a);
    a.href=canvas_container.toDataURL('image/png');
    a.download="untitle.png";
    a.click();
    document.body.removeChild("a");
}
function download_as_jpg(){
    const a=document.createElement("a");
    document.body.appendChild(a);
    a.href=canvas_container.toDataURL('image/jpg');
    a.download="untitle.jpg";
    a.click();
    document.body.removeChild("a");
}
function download_as_pdf(){
      var imgData = canvas_container.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("untitle.pdf");
}
