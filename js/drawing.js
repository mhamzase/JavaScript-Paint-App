    var canvas=document.querySelector("#paintcanvas");
    let paint_field=canvas.getContext("2d");
    var painting=false;
    var canvas_offset=canvas.getOffset;
    var rect = canvas.getBoundingClientRect();
    var coords={
        X:0,
        Y:0
    }
    function get_exat_position(client_X,client_Y){
        coords.X=client_X-rect.left;
        coords.Y=client_Y-rect.top;
    }
    function start_painting(event){
        painting=true;
        get_exat_position(event.clientX,event.clientY);
    }
    function stop_painting(){
        painting=false;
    }
    function draw_painting(event){
        if(!painting)return;
        ctx.lineWidth=5;
        ctx.beginPath();
        ctx.moveTo(coords.X,coords.Y);
        get_exat_position(event.clientX,event.clientY);
        paint_field.lineTo(coords.X,coords.Y);
        paint_field.stroke();
       
    }
    canvas.addEventListener('mousedown',start_painting);
    canvas.addEventListener('mouseup',stop_painting);
    canvas.addEventListener('mousemove',draw_painting);
