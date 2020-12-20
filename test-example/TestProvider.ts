import { IRealGameResult } from '../src/types/Interfaces';

/**
 * Below test data is from real games, as the image attached: real_game.jpg
 */

export const JINGBO: IRealGameResult = {
  rolls: [
    6,0, // 1st Frame
    2,0, // 2rd Frame
    0,0,
    4,6,
    10,
    0,0,
    0,8,
    9,1,
    10,
    6,4,3 // 10th Frame
  ],
  totalScore: 99,
  frameScores: [
    6, // 1st Frame
    2, // 2rd Frame
    0,
    20,
    10,
    0,
    8,
    20,
    20,
    13, // 10th Frame
  ],
}

export const JACK: IRealGameResult = {
  rolls: [
    8,2, // 1st Frame
    8,1, // 2rd Frame
    9,0,
    0,7,
    9,0,
    6,1,
    0,6,
    7,0,
    0,1,
    6,0, // 10th Frame
  ],
  totalScore: 79,
  frameScores: [
    18, // 1st Frame
    9, // 2rd Frame
    9,
    7,
    9,
    7,
    6,
    7,
    1,
    6, // 10th Frame
  ],
}

export const ALEX: IRealGameResult = {
  rolls: [
    0,6, // 1st Frame
    9,0, // 2rd Frame
    3,7,
    5,0,
    10,
    9,0,
    8,1,
    0,6,
    10,
    8,2,2, // 10th Frame
  ],
  totalScore: 110,
  frameScores: [
    6, // 1st Frame
    9, // 2rd Frame
    15,
    5,
    19,
    9,
    9,
    6,
    20,
    12, // 10th Frame
  ],
}

export const JASON: IRealGameResult = {
  rolls: [
    1,4, // 1st Frame
    4,6, // 2rd Frame
    0,5,
    8,0,
    1,0,
    6,2,
    10,
    10,
    7,2,
    8,2,8, // 10th Frame
  ],
  totalScore: 110,
  frameScores: [
    5, // 1st Frame
    10, // 2rd Frame
    5,
    8,
    1,
    8,
    27,
    19,
    9,
    18, // 10th Frame
  ],
}

// If one has a strike for every roll, his/her score will be 300
export const FULL_STRIKE: IRealGameResult = {
  rolls: [
    10, // 1st Frame
    10, // 2rd Frame
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,10,10, // 10th Frame
  ],
  totalScore: 300,
  frameScores: [
    30, // 1st Frame
    30, // 2rd Frame
    30,
    30,
    30,
    30,
    30,
    30,
    30,
    30, // 10th Frame
  ],
}

export const ZERO_SCORE: IRealGameResult = {
  rolls: [
    0,0, // 1st Frame
    0,0, // 2rd Frame
    0,0,
    0,0,
    0,0,
    0,0,
    0,0,
    0,0,
    0,0,
    0,0, // 10th Frame
  ],
  totalScore: 0,
  frameScores: [
    0, // 1st Frame
    0, // 2rd Frame
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0, // 10th Frame
  ],
}
