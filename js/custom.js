function myFunction() {
    var x = document.getElementById("myDIV");
    var y = document.getElementById("showbutton");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML = "Piilota video"
    } else {
        x.style.display = "none";
        y.innerHTML = "Click to make a stand!"
    }
}