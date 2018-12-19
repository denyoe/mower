"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @classdesc Grid
 */
var Grid = /** @class */ (function () {
    /**
     * Init
     * @constructor Init Class Params
     * @param width int
     * @param height int
     */
    function Grid(width, height) {
        this._width = width;
        this._height = height;
    }
    Object.defineProperty(Grid.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this._width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (width) {
            this._height = width;
        },
        enumerable: true,
        configurable: true
    });
    return Grid;
}());
exports.default = Grid;
