/**
 * How do we annotate the errors this function throws?
 */
var getUserFromLocalStorage = function (id) {
    var user = localStorage.getItem(id);
    if (!user) {
        return undefined;
    }
    return JSON.parse(user);
};
try {
    var user_1 = getUserFromLocalStorage("user-1");
}
catch (
// How do we make this typed as PossibleErrors?
e) { }
