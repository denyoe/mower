"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Mower_1 = __importDefault(require("../utils/Mower"));
var Lawn_1 = __importDefault(require("../utils/Lawn"));
describe('Lawn Tests', function () {
    describe('Positioning Test', function () {
        it('should skip mower when it is initially positioned outside of the lawn', function () {
            var lawn = new Lawn_1.default();
            lawn.grid.width = 2;
            lawn.grid.height = 2;
            var mower = new Mower_1.default({ x: 1, y: 3 }, 'N');
            lawn.addMower(mower);
            expect(lawn.mowers.length).toBeFalsy();
        });
    });
});
