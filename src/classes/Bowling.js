"use strict";
exports.__esModule = true;
exports.Bowling = void 0;
var ArraySum_1 = require("../utils/ArraySum");
var Bowling = /** @class */ (function () {
    function Bowling(rolls) {
        var _this = this;
        if (rolls === void 0) { rolls = []; }
        // A temporary list that holding current processing rolls.
        this.processingRolls = [];
        // An array that contains each frame score:
        this.frameScores = [];
        this.rolls = rolls;
        if (this.rolls.length > 0) {
            // If array is provided, simulate add roll for each element.
            this.rolls.map(function (e) {
                _this.roll(e);
            });
        }
    }
    Bowling.prototype.roll = function (numberOfPins) {
        this.processingRolls.push(numberOfPins);
        // each ROLL will trigger the calculation:
        this.calculateScore();
    };
    Bowling.prototype.score = function () {
        // get the last frame score:
        return this.frameScores[this.frameScores.length - 1];
    };
    Bowling.prototype.getFrameScores = function () {
        return this.frameScores;
    };
    Bowling.prototype.getTotalScore = function () {
        return ArraySum_1.arraySum(this.frameScores);
    };
    /**
     * This function will:
     * 1. Calculate frameScore, push result to the list;
     * 2. Manipulate `processingRolls`, removing computed roll(s) after each
     *    execution;
     */
    Bowling.prototype.calculateScore = function () {
        if (this.processingRolls.length < 2) {
            // If there is only 1 record, skip calculation:
            return;
        }
        var firstRoll = this.processingRolls[0];
        var secondRoll = this.processingRolls[1];
        var twoRollsSum = firstRoll + secondRoll;
        if (this.processingRolls.length == 2 && twoRollsSum < 10) {
            // twoRollsSum < 10 means no STRIKE nor SPARE, the frameScore is the sum
            // of the two rolls:
            this.frameScores.push(twoRollsSum);
            // Calculation finished for this frame, reset `processingRolls`:
            this.processingRolls = [];
            return;
        }
        // Below this line, twoRollSum must be 10. So below must be a STRIKE or
        // SPARE.
        // For STRIKE or SPARE, we need to wait for another roll before start calculate
        if (this.processingRolls.length == 3) {
            var thirdRoll = this.processingRolls[2];
            // For both STRIKE and SPARE, the frameScore is the sum of three rolls.
            // (Also covered 10th frame):
            var threeRollsSum = (twoRollsSum + thirdRoll);
            this.frameScores.push(threeRollsSum);
            if (firstRoll == 10) {
                // A STRIKE frame only has 1 roll, remove it from `processingRolls`
                // after computing:
                this.processingRolls.shift();
                // The last two Rolls may still be computed:
                // 1: If their sum < 10, recursive function will push the next frame
                //    into frameScores (processingRolls.length == 2);
                // 2: If their sum == 10 (STRIKE or SPARE), recursive function will wait
                //    for another upcoming roll, and then it will hit
                //    `processingRolls.length >= 3` again. This process will repeat.
                this.calculateScore();
                return;
            }
            // A SPARE frame has 2 rolls, remove them from `processingRolls` after
            // computing. The last roll will remain in the `processingRolls` for next
            // computing.
            this.processingRolls.splice(0, 2);
            return;
        }
    };
    return Bowling;
}());
exports.Bowling = Bowling;
