
function myFunction() {
  var x = document.getElementsByClassName("cancer");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
function showDate() {
  document.getElementById("demo").innerHTML = new Date();
}
function light(sw) {
  var pic;
  if (sw === 0) {
    pic = "image/pic_bulboff.gif";
  } else {
    pic = "image/pic_bulbon.gif"; 
  }
  document.getElementById("myImage").src = pic;
}
