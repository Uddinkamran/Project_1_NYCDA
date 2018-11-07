var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var j = document.getElementsByClassName("Slides");
    var k = document.getElementsByClassName("three");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
       j[i].style.display = "none";
       k[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "inline-block";
    j[myIndex-1].style.display = "inline-block";
    k[myIndex-1].style.display = "inline-block";
    setTimeout(carousel, 7000); // Change image every 2 seconds

}
