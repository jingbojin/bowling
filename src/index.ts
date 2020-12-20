import { Bowling } from './classes/Bowling';
import { JINGBO } from '../test-example/TestProvider';

// Feel free to add your customised `rolls` here
const bowlingGame = new Bowling(JINGBO.rolls);

console.log('Total Score:', bowlingGame.score());
console.log('Last Frame Score:', bowlingGame.getLastScore());
console.log('Each Frame Score:', bowlingGame.getFrameScores());
