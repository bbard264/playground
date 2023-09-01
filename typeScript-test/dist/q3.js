"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// checkClimb() => check on board that current spot should climp up or climp donw or not
// example
// Boards = {ladders:[3,39],snakes:[41,5]}
// if input is 3 , output is 39
// if input is 41, output is 5
// if input is 20, output is 20
function checkClimb(spot, checkPath) {
    for (const path of [...checkPath.ladders, ...checkPath.snakes]) {
        if (path[0] === spot) {
            return path[1];
        }
    }
    return spot;
}
// getNextSpot() => find next path
// result will create array all way of posible of dying dice1d6 every way
// example
// input
// [{ spot: [ 1, 2 ], dice: [ 1 ] }]
// output
// [{ spot: [ 1, 2, 39 ], dice: [ 1, 1 ] },
// { spot: [ 1, 2, 4 ], dice: [ 1, 2 ] },
// { spot: [ 1, 2, 5 ], dice: [ 1, 3 ] },
// { spot: [ 1, 2, 6 ], dice: [ 1, 4 ] },
// { spot: [ 1, 2, 7 ], dice: [ 1, 5 ] },
// { spot: [ 1, 2, 8 ], dice: [ 1, 6 ] }]
function getNextSpot(startSpot, // array of current path
checkPath, // for check climp
minThrows = 100 //filter throwing over minimum that we won't interest because we are finding minimum way of throwing to get spot 100
) {
    const newWays = [];
    for (const way of startSpot) {
        if (way.dice.length >= minThrows && way.spot[way.spot.length - 1] !== 100) {
            // if current path have thrown equal or higher minThrows and the last spot is not 100, we should skip because we don't interest
            continue;
        }
        else if (way.spot[way.spot.length - 1] === 100) {
            // if current path have thrown less that minThrows and last spot === 100, we won't find next spot because it is done
            newWays.push(way);
            continue;
        }
        else {
            for (let dice = 1; dice < 7; dice++) {
                const currentSpot = way.spot[way.spot.length - 1];
                let nextSpot = currentSpot + dice;
                if (nextSpot > 100) {
                    nextSpot = 100 - (nextSpot - 100);
                }
                const updatedSpot = checkClimb(nextSpot, checkPath);
                if (way.dice.length + 1 >= minThrows && updatedSpot !== 100) {
                    continue;
                }
                const newWay = {
                    spot: [...way.spot, updatedSpot],
                    dice: [...way.dice, dice],
                };
                newWays.push(newWay);
            }
            continue;
        }
    }
    return newWays;
}
// quickestPath()=> looping utill all last spot is 100 and have number of throwing equal to minThrows
// filter out the output that we are not interesting in function getNextSpot
function quickestPath(board) {
    let startSpot = [{ spot: [1], dice: [] }];
    let finalPath = [];
    let minThrows = 100;
    while (true) {
        let nextWay = getNextSpot(startSpot, board, minThrows);
        let shouldContinue = false;
        for (const way of nextWay) {
            // update minThrows if we find that the last spot is 100 and number of throwing less that lastest minThrows
            if (way.spot[way.spot.length - 1] === 100 &&
                way.dice.length < minThrows) {
                minThrows = way.dice.length;
            }
            // if we still have case that interest, we should continue the loop
            if (way.dice.length < minThrows || way.spot[way.spot.length - 1] < 100) {
                shouldContinue = true;
            }
        }
        if (shouldContinue === false) {
            // result should be all only the path that have lastest spot is 100 and number of throwing equal to minThrowing only
            finalPath = nextWay;
            break;
        }
        startSpot = nextWay;
    }
    // define result follow requirments
    let quickPath = [];
    for (const way of finalPath) {
        quickPath.push(way.dice);
    }
    return quickPath;
}
const testBoard = {
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
exports.default = quickestPath;
// console.log(quickestPath(testBoard));
// expect Result form quickestPath(testBoard)
// [
//     [ 2, 5, 6, 1, 6 ],
//     [ 2, 5, 6, 2, 5 ],
//     [ 2, 5, 6, 4, 3 ],
//     [ 2, 5, 6, 5, 2 ],
//     [ 2, 5, 6, 6, 1 ]
//   ]
