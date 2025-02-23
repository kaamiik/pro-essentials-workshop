var getUserFromLocalStorage = function (id) {
    try {
        var user_1 = localStorage.getItem(id);
        if (!user_1) {
            return {
                success: true,
                data: undefined,
            };
        }
        return {
            success: true,
            data: JSON.parse(user_1),
        };
    }
    catch (e) {
        if (e instanceof DOMException) {
            return {
                success: false,
                error: e,
            };
        }
        if (e instanceof SyntaxError) {
            return {
                success: false,
                error: e,
            };
        }
        throw e;
    }
};
var user = getUserFromLocalStorage("user-1");
if (user.success) {
    user.data;
}
else {
    user.error;
}
