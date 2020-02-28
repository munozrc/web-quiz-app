function load(){
    document.getElementById("redes2-btn").addEventListener("click", loadAsignaturaRedes2);
    document.getElementById("semiprog2-btn").addEventListener("click", loadAsignaturaSemiprog2);
}

function loadAsignaturaRedes2(){
    document.getElementById("title-page").innerText = "Redes de computadores II";
    document.getElementById("selector-class").className += "d-none";

    document.getElementById("selector-question").className = "container d.block";

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        console.log(myObj);
      }
    };
    xmlhttp.open("GET", "questions-redes2.json", true);
    xmlhttp.send();
}

function loadAsignaturaSemiprog2(){
    document.getElementById("title-page").innerText = "Seminario de programacion II";
    document.getElementById("selector-class").className += "d-none";

    document.getElementById("selector-question").className = "container d.block";
}

document.addEventListener("DOMContentLoaded", load, false);