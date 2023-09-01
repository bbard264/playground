import getClockAngle from './q1';
import getQuestionPart from './q2';
import quickestPath, { Boards } from './q3';

function testGetClockAngle() {
  console.log('------------------Q1-----------------------');
  const result1 = getClockAngle('09:00');
  console.log(`case1: getClockAngle('09:00')`);
  console.log(`result:`, result1);
  const result2 = getClockAngle('17:30');
  console.log(`case2: getClockAngle('17:30')`);
  console.log(`result:`, result2);
  if (result1 === 90 && result2 === 15) {
    return true;
  } else {
    return false;
  }
}

function testGetQuestionPart() {
  console.log('------------------Q2-----------------------');
  const result1 = getQuestionPart(['BATHROOM', 'BATH SALTS', 'BLOODBATH']);
  console.log(
    `case1: getQuestionPart(['BATHROOM', 'BATH SALTS', 'BLOODBATH'])`
  );
  console.log(`result:`, result1);
  const result2 = getQuestionPart(['BEFRIEND', 'GIRLFRIEND', 'FRIENDSHIP']);
  console.log(
    `case2: getQuestionPart(['BEFRIEND', 'GIRLFRIEND', 'FRIENDSHIP'])`
  );
  console.log(`result:`, result2);

  if (
    JSON.stringify(result1) === JSON.stringify(['ROOM', 'SALTS', 'BLOOD']) &&
    JSON.stringify(result2) === JSON.stringify(['BE', 'GIRL', 'SHIP'])
  ) {
    return true;
  } else {
    return false;
  }
}

function testQuickestPath() {
  console.log('------------------Q3-----------------------');
  const board: Boards = {
    ladders: [
      [3, 39],
      [14, 35],
      [31, 70],
      [44, 65],
      [47, 86],
      [63, 83],
      [71, 93],
    ],
    snakes: [
      [21, 4],
      [30, 8],
      [55, 38],
      [79, 42],
      [87, 54],
      [91, 48],
      [96, 66],
    ],
  };
  const result = quickestPath(board);
  const expectedResult = [
    [2, 5, 6, 1, 6],
    [2, 5, 6, 2, 5],
    [2, 5, 6, 4, 3],
    [2, 5, 6, 5, 2],
    [2, 5, 6, 6, 1],
  ];
  console.log(`case1:`);
  console.log(`quickestPath({
    ladders: [ [3, 39], [14, 35], [31, 70], [44, 65], [47, 86], [63, 83], [71, 93] ],
    snakes: [ [21, 4], [30, 8], [55, 38], [79, 42], [87, 54], [91, 48], [96, 66] ]
    })`);
  console.log(`result:`);
  console.log(result);
  if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
    return true;
  } else {
    return false;
  }
}

const q1TestResult = testGetClockAngle();
const q2TestResult = testGetQuestionPart();
const q3TestResult = testQuickestPath();
console.log('------------------TEST-RESULT-----------------------');
console.log('Q1 Test Result:', q1TestResult);
console.log('Q2 Test Result:', q2TestResult);
console.log('Q3 Test Result:', q3TestResult);
