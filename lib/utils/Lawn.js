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
    function Lawn(path) {
        if (path === void 0) { path = 'mower.txt'; }
        this._mowers = [];
        this.grid = new Grid_1.default(0, 0);
        this.init(path);
    }
    Object.defineProperty(Lawn.prototype, "mowers", {
        get: function () {
            return this._mowers;
        },
        enumerable: true,
        configurable: true
    });
    Lawn.prototype._addMower = function (mower) {
        this._mowers.push(mower);
    };
    Lawn.prototype.init = function (path) {
        // const stream = fs.createReadStream(path, 'utf8')
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
            console.log(inital_pos, instructions);
            this._addMower(mower);
        }
        // this.mow()
        // console.log(this.mowers)
        // let Lines: string[] = []
        // stream
        // 	.on('error', (e) => {
        // 		console.log('An Error Occured: ', e)
        // 	})
        // 	.on('data', (chunk) => {
        // 		Lines = chunk.split('\n')
        // 	})
        // 	.on('end', () => {
        // 		console.log(Lines)
        // 	})
        // let mower: Mower = new Mower({ x: 3, y: 3 }, 'E');
        // let mower: Mower = new Mower({ x: 1, y: 2 }, 'N');
        // this._addMower(new Mower({ x: 1, y: 2 }, 'N'))
        // this._addMower(new Mower({ x: 3, y: 3 }, 'E'))
    };
    Lawn.prototype.mow = function () {
        var _this = this;
        this.mowers.map(function (mower) {
            // let moves: string[] = 'LFLFLFLFF'.split('')
            // let moves: string[] = 'FFRFFRFRRF'.split('')
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
            console.log(mower.position, mower.orientation);
        });
        return this;
    };
    return Lawn;
}());
exports.default = Lawn;
