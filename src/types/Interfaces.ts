export interface IBowling {
  roll: (numberOfPins: number) => void;
  score: () => number;
}

export interface IRealGameResult {
  rolls: number[];
  frameScores: number[];
  totalScore: number;
}
