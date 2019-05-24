// When the user clicks on div, open the popup
function myFunction1() {
  var popup1 = document.getElementById("myPopup1");
  popup1.classList.toggle("show");
}
function myFunction2() {
  var popup2 = document.getElementById("myPopup2");
  popup2.classList.toggle("show");
}
function myFunction3() {
  var popup3 = document.getElementById("myPopup3");
  popup3.classList.toggle("show");
}
function myFunction4() {
  var popup4 = document.getElementById("myPopup4");
  popup4.classList.toggle("show");
}
function myFunction5() {
  var popup5 = document.getElementById("myPopup5");
  popup5.classList.toggle("show");
}
function myFunction6() {
  var popup6 = document.getElementById("myPopup6");
  popup6.classList.toggle("show");
}
function myFunction7() {
  var popup7 = document.getElementById("myPopup7");
  popup7.classList.toggle("show");
}
function myFunctiona() {
  var popupa = document.getElementById("myPopupa");
  popupa.classList.toggle("show");
}
function myFunction8() {
  var popup8 = document.getElementById("myPopup8");
  popup8.classList.toggle("show");
}
function myFunction9() {
  var popup9 = document.getElementById("myPopup9");
  popup9.classList.toggle("show");
}
function myFunction10() {
  var popup10 = document.getElementById("myPopup10");
  popup10.classList.toggle("show");
}

function myFunction11() {
  var popup11 = document.getElementById("myPopup11");
  popup11.classList.toggle("show");
}

function myFunction12() {
  var popup12 = document.getElementById("myPopup12");
  popup12.classList.toggle("show");
}
function myFunction13() {
  var popup13 = document.getElementById("myPopup13");
  popup13.classList.toggle("show");
}
function myFunction14() {
  var popup14 = document.getElementById("myPopup14");
  popup14.classList.toggle("show");
}
function myFunction15() {
  var popup15 = document.getElementById("myPopup15");
  popup15.classList.toggle("show");
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
