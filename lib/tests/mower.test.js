"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Mower_1 = __importDefault(require("../utils/Mower"));
var Grid_1 = __importDefault(require("../utils/Grid"));
describe('Lawn Mower Movements', function () {
    describe('Directions tests', function () {
        it('should correctly get "Left" direction when turning from "North" orientation', function () {
            var mower = new Mower_1.default({ x: 1, y: 3 }, 'N');
            expect(mower.turn('L')).toStrictEqual('W');
        });
        it('should correctly get "Righ" direction when turning from "East" orientation', function () {
            var mower = new Mower_1.default({ x: 1, y: 3 }, 'E');
            expect(mower.turn('R')).toStrictEqual('S');
        });
    });
    describe('Positions Test', function () {
        it('should not move outside of the lawn grid', function () {
            var mower = new Mower_1.default({ x: 1, y: 3 }, 'N');
            var grid = new Grid_1.default(3, 3);
            // try to advance
            mower.advance(grid);
            // assert mower does not move
            expect(mower.position.y).toStrictEqual(3);
            // change orientation
            mower.turn('R');
            expect(mower.orientation).toStrictEqual('E');
            // try to advance East
            mower.advance(grid);
            // assert mower moves this time [move not ouside of lawn]
            expect(mower.position.x).toStrictEqual(2);
        });
    });
});
