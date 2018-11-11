function openPage(pageName,elmnt) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    document.getElementById(pageName).style.display = "block";
    elmnt.currentTarget.classList.add("active");

}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("defaultOpen").click();
})


function myShowHide(buttonName) {
    var x = document.getElementById(buttonName);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}