"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("../src/index.js");
var vitest_1 = require("vitest");
(0, vitest_1.describe)('Example class', function () {
    (0, vitest_1.it)('should create an instance using its constructor', function () {
        var example = new index_js_1.Example();
        (0, vitest_1.expect)(example).toBeDefined();
    });
    (0, vitest_1.it)('should return whatever is passed to exampleMethod()', function () {
        var example = new index_js_1.Example();
        var param = 'This is my param.';
        var returnValue = example.exampleMethod(param);
        (0, vitest_1.expect)(returnValue).toEqual(param);
    });
});
