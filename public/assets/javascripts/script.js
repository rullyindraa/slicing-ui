function myFunction() {
  var x = document.getElementById("my-top-nav");
  if (x.className === "top-nav") {
    x.className += " responsive";
  } else {
    x.className = "top-nav";
  }
}

function myDropdown() {
  document.getElementById("my-dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.nav-lang')) {
    var mydropdown = document.getElementById("my-dropdown");
    if (mydropdown.classList.contains('show')) {
      mydropdown.classList.remove('show');
    }
  }
}