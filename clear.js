document.body.style="";
if (document.getElementById("macaron")) {
  document.getElementById("macaron").remove()
}
document.querySelectorAll('h1,p,h2,h3,h4,a,span,svg').forEach(node=> node.style.color = "");
