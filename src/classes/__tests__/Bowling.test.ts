import {
  ALEX,
  FULL_STRIKE,
  JACK,
  JASON,
  JINGBO,
  ZERO_SCORE,
} from '../../../test-example/TestProvider';
import { Bowling } from '../Bowling';

describe('test Bowling.ts', () => {
  it.each`
    rolls                 | expectedFrameScores         | expectedTotalScore        | comments
    ${JINGBO.rolls}       | ${JINGBO.frameScores}       | ${JINGBO.totalScore}      | ${`Jingbo's score`}
    ${JACK.rolls}         | ${JACK.frameScores}         | ${JACK.totalScore}        | ${`Jack's score`}
    ${ALEX.rolls}         | ${ALEX.frameScores}         | ${ALEX.totalScore}        | ${`Alex's score`}
    ${JASON.rolls}        | ${JASON.frameScores}        | ${JASON.totalScore}       | ${`JASON's score`}
    ${FULL_STRIKE.rolls}  | ${FULL_STRIKE.frameScores}  | ${FULL_STRIKE.totalScore} | ${`FULL_STRIKE's score`}
    ${ZERO_SCORE.rolls}   | ${ZERO_SCORE.frameScores}   | ${ZERO_SCORE.totalScore}  | ${`ZERO_SCORE's score`}
  `('$comments', ({ rolls, expectedFrameScores, expectedTotalScore }) => {
    const bowling = new Bowling(rolls);
    expect(bowling.score()).toBe(expectedTotalScore);
    expect(bowling.getFrameScores()).toEqual(expectedFrameScores);
    expect(bowling.getLastScore())
      .toEqual(expectedFrameScores[expectedFrameScores.length - 1]);
  });
  
  it.each`
    sequenceOfRolls      | expectedFrameScores  | expectedTotalScore  | comments
    ${[]}                | ${[]}                | ${0}                | ${'initial'}
    ${[0,0]}             | ${[0]}               | ${0}                | ${'zero score'}
    ${[2,3]}             | ${[5]}               | ${5}                | ${'<10'}
    ${[10,5,1]}          | ${[16,6]}            | ${22}               | ${'STRIKE with last two rolls < 10'}
    ${[10,10,5,1]}       | ${[25,16,6]}         | ${47}               | ${'STRIKE twice'}
    ${[10,4,6,7,1]}      | ${[20,17,8]}         | ${45}               | ${'STRIKE followed by SPARE'}
    ${[4,6,3,2]}         | ${[13,5]}            | ${18}               | ${'SPARE with last two rolls < 10'}
    ${[7,3,10,1,1]}      | ${[20,12,2]}         | ${34}               | ${'SPARE followed by STRIKE'}
    ${[7,3,5,5,1,2]}     | ${[15,11,3]}         | ${29}               | ${'SPARE twice'}
  `('$comments', ({ sequenceOfRolls, expectedFrameScores, expectedTotalScore }) => {
    const bowling = new Bowling();
    sequenceOfRolls.map((e:number)=>{bowling.roll(e)});
    expect(bowling.getFrameScores()).toEqual(expectedFrameScores);
    expect(bowling.score()).toBe(expectedTotalScore);
    expect(bowling.getLastScore())
      .toEqual(expectedFrameScores[expectedFrameScores.length - 1]);
  })
})
