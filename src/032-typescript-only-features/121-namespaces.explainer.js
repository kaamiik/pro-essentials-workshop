var GeometryUtils;
(function (GeometryUtils) {
    var Circle;
    (function (Circle) {
        function calculateArea(radius) {
            // implementation
        }
        Circle.calculateArea = calculateArea;
        function calculateCircumference(radius) {
            // implementation
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = GeometryUtils.Circle || (GeometryUtils.Circle = {}));
    var Rectangle;
    (function (Rectangle) {
        function calculateArea(rect) {
            // implementation
        }
        Rectangle.calculateArea = calculateArea;
        function calculatePerimeter(rect) {
            // implementation
        }
        Rectangle.calculatePerimeter = calculatePerimeter;
    })(Rectangle = GeometryUtils.Rectangle || (GeometryUtils.Rectangle = {}));
})(GeometryUtils || (GeometryUtils = {}));
// Can be used as values...
GeometryUtils.Circle.calculateArea(10);
// ...or as types
var rect = {
    width: 10,
    height: 20,
};
