document.addEventListener("DOMContentLoaded", function () {
    var app = document.querySelector("#app");
    app.innerHTML = "Hello World!";
});
// @ts-expect-error
console.log(ONLY_AVAILABLE_ON_SERVER);
