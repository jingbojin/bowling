# Bowling: TypeScript + Jest
[![Build Status](https://travis-ci.com/jingbojin/bowling.svg?branch=master)](https://travis-ci.com/jingbojin/bowling)
[![codecov](https://codecov.io/gh/jingbojin/bowling/branch/master/graph/badge.svg)](https://codecov.io/gh/jingbojin/bowling)
[![ts](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)](https://www.typescriptlang.org)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

***
## Instructions:
1. `npm install`
2. update src/index.ts to enter your customised game.
3. `npm run print-score`


Test coverage report:
https://app.codecov.io/gh/jingbojin/bowling/branch/master

Build status:
https://travis-ci.com/github/jingbojin/bowling

***
## Run tests:
1. To run test-coverage: `npm run test-coverage`.
2. To run particular test: `npm test src/classes/__tests__/Bowling.test.ts`

***
## Files:
1. `src/classes/Bowling.ts` is the main class.
2. `test-example/*` holds the test examples.
3. `__tests__/*` are all test files.

***
## src/classes/Bowling.ts --> calculateScore():
It is a recursive function. This function's purpose:
1. Calculate each frame's score, add result to the `frameScores` list.
2. Remove computed roll(s) from `processingRolls` after each execution.
3. If there is only 1 roll in `processingRolls`, don't do anything, wait for the
   next upcoming roll. 
---
The algorithm based on rules:
1. If two rolls < 10, the score of that frame is the sum of both rolls.
2. For either a STRIKE or SPARE, the score of that frame, is the sum of 3 rolls.
   This also applies to 10th frame, which may contains max 3 rolls. 
3. Cannot compute a frame with only 1 roll.  

----
Once a STRIKE happens, we:
1. Calculate that frame score, using 3 rolls.
2. Remove first rolls from the `processingRolls`.
3. The rest two rolls left in `processingRolls`, will be recursively calculated:
   
   - If their sum < 10, recursive function will use two rolls' sum;
   - If their sum == 10 (STRIKE/SPARE), recursive function will wait     
        for another upcoming roll.

---
As a result:
The `processingRolls` length has a range of 0~3:

    0: when two rolls pin < 10, list will reset to empty.
    1: first roll, calculateScore() will skip and wait for next roll.
    2: two rolls, if their total pin < 10, the frameScore will be the sum. 
        Otherwise, wait for another roll (since it must be STRIKE/SPARE) 
    3: STRIKE or SPARE

The `processingRolls` length will never exceed 3, due to continues removal in
each execution.
