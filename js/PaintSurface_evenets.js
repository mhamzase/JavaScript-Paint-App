let canvas_container=document.querySelector("#paintcanvas");
let paint_areas=canvas_container.getContext('2d');
function clear_surface(){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Erazer it!'
      }).then((result) => {
        if (result.isConfirmed) {
            paint_areas.clearRect(0,0,canvas_container.width,canvas_container.height);
        }
      })
}
