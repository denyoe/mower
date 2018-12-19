"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Grid_1 = __importDefault(require("../utils/Grid"));
describe('Grid Lass Operations', function () {
    test('Correctly sets weight and height', function () {
        var grid = new Grid_1.default(1, 5);
        expect(grid.width).toStrictEqual(1);
        expect(grid.height).toStrictEqual(5);
    });
    test('Can modify its own weight and height', function () {
        var grid = new Grid_1.default(1, 5);
        grid.width = 3;
        expect(grid.width).toStrictEqual(3);
    });
});
