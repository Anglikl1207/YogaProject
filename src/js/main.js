// You can include your own javascript here
// alert("hello, your main.js file was added properly.");
console.log("Logging from main.js, it was loaded.");

// Navigation
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}