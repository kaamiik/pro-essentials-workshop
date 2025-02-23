var goToRoute = function (route) {
    // ...
};
goToRoute("/home");
goToRoute("/about");
goToRoute("/contact");
goToRoute(
// @ts-expect-error
"somewhere");
