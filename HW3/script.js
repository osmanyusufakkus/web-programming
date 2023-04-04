function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
const prsn = document.getElementById("personal");
const edctn = document.getElementById("education");
const skll = document.getElementById("skill");

document.getElementById("item1").addEventListener("click", function () {
  if (prsn.style.visibility == "hidden") {
    prsn.style.visibility = "visible";
    prsn.style.position = "static";
  } else {
    prsn.style.visibility = "hidden";
    prsn.style.position = "absolute";
  }
});

document.getElementById("item2").addEventListener("click", function () {
  if (edctn.style.visibility == "hidden") {
    edctn.style.visibility = "visible";
    edctn.style.position = "static";
  } else {
    edctn.style.visibility = "hidden";
    edctn.style.position = "absolute";
  }
});

document.getElementById("item3").addEventListener("click", function () {
  if (skll.style.visibility == "hidden") {
    skll.style.visibility = "visible";
    skll.style.position = "static";
  } else {
    skll.style.visibility = "hidden";
    skll.style.position = "absolute";
  }
});
