"use strict";
exports.__esModule = true;
exports.ZERO_SCORE = exports.FULL_STRIKE = exports.JASON = exports.ALEX = exports.JACK = exports.JINGBO = void 0;
/**
 * Below test data is from real games, as the image attached: real_game.jpg
 */
exports.JINGBO = {
    rolls: [
        6, 0,
        2, 0,
        0, 0,
        4, 6,
        10,
        0, 0,
        0, 8,
        9, 1,
        10,
        6, 4, 3 // 10th Frame
    ],
    totalScore: 99,
    frameScores: [
        6,
        2,
        0,
        20,
        10,
        0,
        8,
        20,
        20,
        13,
    ]
};
exports.JACK = {
    rolls: [
        8, 2,
        8, 1,
        9, 0,
        0, 7,
        9, 0,
        6, 1,
        0, 6,
        7, 0,
        0, 1,
        6, 0,
    ],
    totalScore: 79,
    frameScores: [
        18,
        9,
        9,
        7,
        9,
        7,
        6,
        7,
        1,
        6,
    ]
};
exports.ALEX = {
    rolls: [
        0, 6,
        9, 0,
        3, 7,
        5, 0,
        10,
        9, 0,
        8, 1,
        0, 6,
        10,
        8, 2, 2,
    ],
    totalScore: 110,
    frameScores: [
        6,
        9,
        15,
        5,
        19,
        9,
        9,
        6,
        20,
        12,
    ]
};
exports.JASON = {
    rolls: [
        1, 4,
        4, 6,
        0, 5,
        8, 0,
        1, 0,
        6, 2,
        10,
        10,
        7, 2,
        8, 2, 8,
    ],
    totalScore: 110,
    frameScores: [
        5,
        10,
        5,
        8,
        1,
        8,
        27,
        19,
        9,
        18,
    ]
};
// If one has a strike for every roll, his/her score will be 300
exports.FULL_STRIKE = {
    rolls: [
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10,
        10, 10, 10,
    ],
    totalScore: 300,
    frameScores: [
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
    ]
};
exports.ZERO_SCORE = {
    rolls: [
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
    ],
    totalScore: 0,
    frameScores: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
    ]
};
