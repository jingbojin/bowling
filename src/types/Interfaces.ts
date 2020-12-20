export interface IBowling {
  roll: (numberOfPins: number) => void;
  // score ==> Total score of the game, sum of each frames so far:
  score: () => number;
}

export interface IRealGameResult {
  rolls: number[];
  frameScores: number[];
  totalScore: number;
}
