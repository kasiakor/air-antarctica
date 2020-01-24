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
