var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    if(loader) loader.style.display = "none";
})

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')
myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
  console.log(myInput);
})

