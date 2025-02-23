"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var getAvatarImage = function (entity) {
    {
        // Should not be able to access properties that are
        // not common to both types
        // @ts-expect-error
        entity.age;
        // @ts-expect-error
        entity.address;
        // @ts-expect-error
        entity.price;
    }
    return {
        url: "https://via.placeholder.com/".concat(entity.imageId),
        alt: "".concat(entity.name, " Avatar"),
    };
};
(0, vitest_1.it)("Should work for a user", function () {
    var result = getAvatarImage({
        id: "1",
        name: "John",
        age: 20,
        imageId: "abc123",
    });
    (0, vitest_1.expect)(result).toEqual({
        url: "https://via.placeholder.com/abc123",
        alt: "John Avatar",
    });
});
(0, vitest_1.it)("Should work for an organisation", function () {
    var result = getAvatarImage({
        id: "1",
        name: "Total TypeScript",
        address: "1 Main Street",
        imageId: "abc123",
    });
    (0, vitest_1.expect)(result).toEqual({
        url: "https://via.placeholder.com/abc123",
        alt: "Total TypeScript Avatar",
    });
});
(0, vitest_1.it)("Should work for a product", function () {
    var result = getAvatarImage({
        id: "1",
        name: "TypeScript Mug",
        price: 10,
        imageId: "abc123",
    });
    (0, vitest_1.expect)(result).toEqual({
        url: "https://via.placeholder.com/abc123",
        alt: "TypeScript Mug Avatar",
    });
});
