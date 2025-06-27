let header = document.getElementById("header");
window.onscroll = function () {
  if (scrollY >= 80) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.80)";
  } else {
    header.style.backgroundColor = "blueviolet";
  }
};

let goToAssignments = document.getElementById("assignmentsHTML");

goToAssignments.onclick = function () {
  window.open("need.html", "_self");
};
