"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @classdesc Represents A Mower
 */
var Mower = /** @class */ (function () {
    /**
     * Init
     * @constructor Init Class Params
     * @param position {x, y}
     * @param orientation Char in [N,E,W,S]
     */
    function Mower(position, orientation) {
        /**
         * Commands Passed to The Mower
         */
        this._instructions = [];
        this._position = position;
        this._orientation = orientation;
    }
    Object.defineProperty(Mower.prototype, "instructions", {
        get: function () {
            return this._instructions;
        },
        set: function (moves) {
            this._instructions = moves;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mower.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mower.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (orientation) {
            this._orientation = orientation;
        },
        enumerable: true,
        configurable: true
    });
    Mower.prototype.turn = function (direction) {
        return this._orientation = Mower.Direction[direction][this._orientation];
    };
    Mower.prototype.advance = function (grid) {
        switch (this.orientation) {
            case 'N':
                if (this._position.y < grid.height)
                    this._position.y++;
                break;
            case 'E':
                if (this._position.x < grid.width)
                    this._position.x++;
                break;
            case 'W':
                if (this._position.x > 0)
                    this._position.x--;
                break;
            case 'S':
                if (this._position.y > 0)
                    this._position.y--;
                break;
        }
    };
    /**
     * Mower Orientations Mapping
     * i.e. Right of North => Mower.Direction['R']['N'] === E
     * @refer to README.md
    */
    Mower.Direction = {
        'L': {
            'N': 'W',
            'W': 'S',
            'S': 'E',
            'E': 'N'
        },
        'R': {
            'N': 'E',
            'E': 'S',
            'S': 'W',
            'W': 'N'
        }
    };
    return Mower;
}());
exports.default = Mower;
