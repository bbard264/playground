"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const q1_1 = __importDefault(require("./q1"));
const q2_1 = __importDefault(require("./q2"));
const q3_1 = __importDefault(require("./q3"));
function testGetClockAngle() {
    const result1 = (0, q1_1.default)('09:00');
    const result2 = (0, q1_1.default)('17:30');
    if (result1 === 90 && result2 === 15) {
        return true;
    }
    else {
        return false;
    }
}
function testGetQuestionPart() {
    const result1 = (0, q2_1.default)(['BATHROOM', 'BATH SALTS', 'BLOODBATH']);
    const result2 = (0, q2_1.default)(['BEFRIEND', 'GIRLFRIEND', 'FRIENDSHIP']);
    if (JSON.stringify(result1) === JSON.stringify(['ROOM', 'SALTS', 'BLOOD']) &&
        JSON.stringify(result2) === JSON.stringify(['BE', 'GIRL', 'SHIP'])) {
        return true;
    }
    else {
        return false;
    }
}
function testQuickestPath() {
    const board = {
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
    const result = (0, q3_1.default)(board);
    const expectedResult = [
        [2, 5, 6, 1, 6],
        [2, 5, 6, 2, 5],
        [2, 5, 6, 4, 3],
        [2, 5, 6, 5, 2],
        [2, 5, 6, 6, 1],
    ];
    if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
        return true;
    }
    else {
        return false;
    }
}
const q1TestResult = testGetClockAngle();
const q2TestResult = testGetQuestionPart();
const q3TestResult = testQuickestPath();
console.log('q1 Test Result:', q1TestResult);
console.log('q2 Test Result:', q2TestResult);
console.log('q3 Test Result:', q3TestResult);
