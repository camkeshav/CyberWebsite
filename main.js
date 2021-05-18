function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "container") {
      x.className += " responsive";
    } else {
      x.className = "container";
    }
  }
