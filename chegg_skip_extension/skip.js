function skip(){
    // var r = confirm("Skip Question!");
    var r = true;
    if (r == true) {
        document.getElementById("skipQuestion-Answer").click();
        document.getElementById("noSubKnowledge").click();

        list = document.getElementsByClassName("reason-label-text");
        list[16].click();

        b = document.getElementsByClassName("primary btn-lg btn-primary")
        b[0].click();
    }
}


window.onload = function () {

    tar = document.getElementsByClassName("EA-answer")[0]
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "SKIP";
    btn.style.fontSize = "20px";
    btn.style.color = "red";
    btn.onclick = skip;
    tar.appendChild(btn);

};