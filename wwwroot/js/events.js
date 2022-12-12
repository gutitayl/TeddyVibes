//alert("Hello");
window.onload = whenPageLoads;

function whenPageLoads() {
    var btnOne = document.getElementById("btnOne")
    var btnTwo = document.getElementById("btnTwo")
    var btnThree = document.getElementById("btnThree")
    var btnFour = document.getElementById("btnFour")
    var btnFive = document.getElementById("btnFive")


    //alert(btnOne + "out");

    btnOne.onclick = funOne;
    btnTwo.onclick = funOne;
    btnThree.onclick = function () {
        alert("Button 3 was clicked.")
    };
    btnFour.onmouseenter = function () {
        this.style.backgroundColor = "#f00"
    };

    btnFour.onmouseleave = function () {
        this.style.backgroundColor = "#0f0"
    };
    btnFive.onclick = funOne;


    
}

function funOne() {
    alert(this.id + " was clicked")
}
