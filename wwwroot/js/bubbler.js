//alert("Hello")

window.onload = function () {
    //var bdy = document.getElementsByTagName("body")[0];

    //for (ele of bdy.children) {
    //    ele.onclick = wasClicked;
    //    for (var chl of ele.children) {
    //        chl.onclick = wasClicked;
    //        for (var gchl of chl.children) {
    //            gchl.onclick = wasClicked;
    //            for (var ggchl of gchl.children) {
    //                ggchl.onclick = wasClicked;
    //            }
    //        }
    //    }
    //}

    var div = document.getElementById("myDiv");

    div.onclick = wasClicked;
};

function wasClicked(e) {
    e = e || window.event;
    //alert(e);
    //alert(e.target);
    var clicked = e.target;
    if (clicked.className == "clicked") {
        clicked.className = "";
    } else {
        clicked.className = "clicked";
    }

    //alert(this.id + "Was Clicked");
}

