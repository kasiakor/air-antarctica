// register service worker
if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
    .then(registration => {
        console.log(registration);
    })
    .catch(error => {
        console.error(error);
    })
}
fetch("http://localhost:3000/script.json")
.then(response => response.json())
.then(data => {
    //console.log(data);
    let html = "";
    data.forEach(flight => {
        html += `<div class="card">${flight.city}</div>`;
    });
    document.querySelector("#screen-flights").innerHTML = html;
});

window.onload = function(){
    let differedPrompt;
    const button = document.querySelector("#a2hs");
    console.log(button);
    // when beforeinstallprompt event fires the plus sign will be visible
    window.addEventListener("beforeinstallprompt", event => {
        event.preventDefault();
        differedPrompt = event;
        button.style.display = "block";
    });
    button.addEventListener("click", () => {
        button.style.display = "none";
        differedPrompt.prompt();
        differedPrompt.userChoice.then( result => {
            console.log(result.outcome)
        });
        differedPrompt = null;
    });
};

