
function showTab(id) {
    var contentDivs = document.getElementById("content").children;
    for (var i = 0; i < contentDivs.length; i++) {
      contentDivs[i].classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
}