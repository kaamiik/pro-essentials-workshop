var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Shape_x, _Shape_y;
var Shape = /** @class */ (function () {
    function Shape(initial) {
        var _a, _b;
        _Shape_x.set(this, void 0);
        _Shape_y.set(this, void 0);
        __classPrivateFieldSet(this, _Shape_x, (_a = initial === null || initial === void 0 ? void 0 : initial.x) !== null && _a !== void 0 ? _a : 0, "f");
        __classPrivateFieldSet(this, _Shape_y, (_b = initial === null || initial === void 0 ? void 0 : initial.y) !== null && _b !== void 0 ? _b : 0, "f");
    }
    Object.defineProperty(Shape.prototype, "position", {
        get: function () {
            return {
                x: __classPrivateFieldGet(this, _Shape_x, "f"),
                y: __classPrivateFieldGet(this, _Shape_y, "f"),
            };
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.move = function (x, y) {
        __classPrivateFieldSet(this, _Shape_x, x, "f");
        __classPrivateFieldSet(this, _Shape_y, y, "f");
    };
    return Shape;
}());
_Shape_x = new WeakMap(), _Shape_y = new WeakMap();
