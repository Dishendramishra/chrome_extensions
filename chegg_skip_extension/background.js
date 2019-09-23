// window.onload = function (){

//     var r = confirm("Skip Question!");
//     if (r == true) {
//         document.getElementById("skipQuestion-Answer").click();
//         document.getElementById("noSubKnowledge").click();

//         list = document.getElementsByClassName("reason-label-text");
//         list[16].click();

//         b = document.getElementsByClassName("primary btn-lg btn-primary")
//         b[0].click();
//     }
chrome.browserAction.onClicked.addListener(function(tab) {
        // var r = confirm("Skip Question!");
        // if (r == true) {
        //     chrome.getElementById("skipQuestion-Answer").click();
        //     document.getElementById("noSubKnowledge").click();

        //     list = document.getElementsByClassName("reason-label-text");
        //     list[16].click();

        //     b = document.getElementsByClassName("primary btn-lg btn-primary")
        //     b[0].click();
        // }
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
              console.log(response.farewell);
            });
          });
});

// chrome.getElementById