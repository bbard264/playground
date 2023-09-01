"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findCommonWord2word(wordA, wordB) {
    let letterAIndex = 0;
    let commonWord = [];
    while (true) {
        if (letterAIndex >= wordA.length) {
            break;
        }
        let letterBIndex = 0;
        while (true) {
            if (letterBIndex >= wordB.length) {
                break;
            }
            if (wordA[letterAIndex] === wordB[letterBIndex]) {
                let letterAStartIndex = letterAIndex;
                while (true) {
                    if (wordA[letterAIndex] !== wordB[letterBIndex] ||
                        letterAIndex >= wordA.length ||
                        letterBIndex >= wordB.length) {
                        if (letterAIndex - letterAStartIndex > 2) {
                            commonWord.push(wordA.slice(letterAStartIndex, letterAIndex));
                        }
                        break;
                    }
                    letterAIndex += 1;
                    letterBIndex += 1;
                }
                letterAIndex -= 1;
                letterBIndex -= 1;
            }
            letterBIndex += 1;
        }
        letterAIndex += 1;
    }
    return commonWord;
}
function getQuestionPart(phrases) {
    const [wordA, wordB, wordC] = phrases;
    const commonWords = [
        ...findCommonWord2word(wordA, wordB),
        ...findCommonWord2word(wordA, wordC),
        ...findCommonWord2word(wordB, wordC),
    ];
    let commonWord = '';
    if (commonWords.length === 3 &&
        commonWords[0] === commonWords[1] &&
        commonWords[1] === commonWords[2]) {
        commonWord = commonWords[0];
    }
    else {
        return [];
    }
    const newWords = [];
    for (const word of phrases) {
        let newWord = word.replace(commonWord, '');
        newWord = newWord.replace(' ', '');
        newWords.push(newWord);
    }
    return newWords;
}
exports.default = getQuestionPart;
