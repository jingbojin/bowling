"use strict";
exports.__esModule = true;
var Bowling_1 = require("./classes/Bowling");
var TestProvider_1 = require("../test-example/TestProvider");
var bowlingGame = new Bowling_1.Bowling(TestProvider_1.JINGBO.rolls);
console.log(bowlingGame.getTotalScore());
console.log(bowlingGame.getFrameScores());
