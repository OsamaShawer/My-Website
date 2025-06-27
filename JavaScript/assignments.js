let backTo = document.getElementById("back");
backTo.onclick = function () {
  window.history.go(-1);
};
let assignments = document.getElementById("assignmentsHTML");

assignments.onclick = function () {
  window.open("Assignments.html", "_self");
};

let code = document.getElementById("codeHTML");

code.onclick = function () {
  window.open("/code.html", "_self");
};
