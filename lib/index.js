"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Lawn_1 = __importDefault(require("./utils/Lawn"));
var argv = process.argv;
if (argv.length === 3) {
    // correct number of arguments
    var path = argv[2];
    var lawn = new Lawn_1.default(path).mow();
}
else {
    console.error('Incorrect Number of Arguments. \nPlease Check the README.md for instructions');
}
exports.Run = {
    mow: function () {
        // 
    }
};
