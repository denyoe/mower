"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Grid_1 = __importDefault(require("./Grid"));
var Mower_1 = __importDefault(require("./Mower"));
var fs_1 = __importDefault(require("fs"));
/**
 *
 * @classdesc Lawn
 */
var Lawn = /** @class */ (function () {
    /**
     * Init
     * @constructor Init Class Params
     * @param grid [Grid]
     */
    function Lawn() {
        this._mowers = [];
        this.grid = new Grid_1.default(0, 0);
    }
    Object.defineProperty(Lawn.prototype, "mowers", {
        get: function () {
            return this._mowers;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds Mowers to the Grid
     * @param mower [Mower]
     * TODO: Deal with collision
     */
    Lawn.prototype.addMower = function (mower) {
        if (mower.position.x <= this.grid.width && mower.position.y <= this.grid.height) {
            this._mowers.push(mower);
        }
        else {
            // console.error('Skipping mower...', mower.position)
        }
    };
    /**
     *
     * @param path Path to Mower Commands File
     */
    Lawn.prototype.init = function (path) {
        var commands;
        try {
            commands = fs_1.default.readFileSync(path, 'utf8').split('\n');
        }
        catch (error) {
            throw "File Not Found: " + path;
        }
        var lawn_grid = commands[0].split(' ').map(function (el) {
            return parseInt(el);
        });
        this.grid.width = lawn_grid[0];
        this.grid.height = lawn_grid[1];
        commands.shift(); // remove first line
        for (var i = 0; i < commands.length - 1; i += 2) {
            var inital_pos = commands[i].split(' '); // line [inital position]
            var instructions = commands[i + 1].split(''); // next line [instructions]
            var mower = new Mower_1.default({ x: parseInt(inital_pos[0]), y: parseInt(inital_pos[1]) }, inital_pos[2]);
            mower.instructions = instructions;
            this.addMower(mower);
        }
        return this;
    };
    Lawn.prototype.mow = function () {
        var _this = this;
        this.mowers.map(function (mower) {
            var moves = mower.instructions;
            for (var i = 0; i < moves.length; i++) {
                switch (moves[i]) {
                    case 'F':
                        mower.advance(_this.grid);
                        break;
                    case 'R':
                        mower.turn('R');
                        break;
                    case 'L':
                        mower.turn('L');
                        break;
                }
            }
            console.log(mower.position.x, mower.position.y, mower.orientation);
        });
        return this;
    };
    return Lawn;
}());
exports.default = Lawn;
