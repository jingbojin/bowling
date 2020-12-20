import { IBowling } from '../types/Interfaces';
import { arraySum } from '../utils/ArraySum';

export class Bowling implements IBowling {
  private rolls: number[];
  
  // A temporary list that holding current processing rolls.
  private processingRolls: number[] = [];
  
  // An array that contains each frame score:
  private frameScores: number[] = [];
  
  constructor(rolls: number[] = []) {
    this.rolls = rolls;
    if (this.rolls.length > 0) {
      // If array is provided, simulate add roll for each element.
      this.rolls.map((e: number) => {
        this.roll(e);
      });
    }
  }
  
  public roll(numberOfPins: number): void {
    this.processingRolls.push(numberOfPins);
    // each ROLL will trigger the calculation:
    this.calculateScore();
  }
  
  public score(): number {
    // score ==> Total score of the game, sum of each frames so far:
    return arraySum(this.frameScores);
  }
  
  public getLastScore(): number {
    // get the last frame score:
    return this.frameScores[this.frameScores.length - 1];
  }
  
  public getFrameScores(): number[] {
    return this.frameScores;
  }
  
  /**
   * This function will:
   * 1. Calculate frameScore, push result to the list;
   * 2. Manipulate `processingRolls`, removing computed roll(s) after each run;
   */
  private calculateScore(): void {
    if (this.processingRolls.length < 2) {
      // If there is only 1 record, skip calculation:
      return;
    }
  
    const firstRoll = this.processingRolls[0];
    const secondRoll = this.processingRolls[1];
    const twoRollsSum = firstRoll + secondRoll;
  
    if (this.processingRolls.length == 2 && twoRollsSum < 10) {
      // < 10 means no STRIKE nor SPARE, the frameScore is the sum of 2 rolls:
      this.frameScores.push(twoRollsSum);
      // Calculation finished for this frame, reset `processingRolls`:
      this.processingRolls = [];
      return;
    }
    // Below this line, twoRollSum must be 10. So below must be a STRIKE/SPARE.
  
    // For STRIKE/SPARE, we need to wait for another roll before start calculate
    if (this.processingRolls.length == 3) {
      const thirdRoll = this.processingRolls[2];
    
      // For both STRIKE and SPARE, the frameScore is the sum of three rolls.
      // (Also covered 10th frame):
      const threeRollsSum = (twoRollsSum + thirdRoll);
      this.frameScores.push(threeRollsSum);
    
      if (firstRoll == 10) {
        // A STRIKE frame only has 1 roll, remove it after computing:
        this.processingRolls.shift();
      
        // Recursive function will computer the next frame for remaining rolls:
        // 1: If their sum < 10, recursive function will use sum as frameScore;
        // 2: If their sum == 10 (STRIKE/SPARE), recursive function will wait
        //    for another upcoming roll. This process will repeat.
        this.calculateScore();
        return;
      }
      // A SPARE frame has 2 rolls, remove after computing.
      // Last roll will remain in the `processingRolls`, wait for another roll.
      this.processingRolls.splice(0, 2);
      return;
    }
  }
}
