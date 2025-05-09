import * as _ from 'lodash-es';
import * as C from '../../Coordinate';
// const log = console.log
// const dir = console.dir
const StepFn = C.StepFunctions;
const pointExtension = (startPos, steps) => {
    const directions = [StepFn.stepNW, StepFn.stepN, StepFn.stepNE, StepFn.stepW,
        StepFn.stepE, StepFn.stepSW, StepFn.stepS, StepFn.stepSE];
    return directions.map(f => {
        const loop = (acc, cur, i) => {
            const next = f(cur);
            return (i >= steps - 1) ? acc : loop([...acc, next], next, i + 1);
        };
        return loop([startPos], startPos, 0);
    });
};
const xExtension = (c) => [[c, StepFn.stepNW(c), StepFn.stepNE(c), StepFn.stepSW(c), StepFn.stepSE(c)]];
const potentialWords = (exts, grid) => {
    return grid.reduce((acc, innerArr, outerIndex) => {
        const innerResult = innerArr.reduce((acc, elem, innerIndex) => {
            return [...acc, ...exts([innerIndex, outerIndex])];
        }, []);
        return [...acc, ...innerResult];
    }, []);
};
const validWords = (words, grid) => {
    const lenY = grid.length;
    const lenX = grid[0].length;
    const isValidXY = ([x, y]) => x >= 0 && x < lenX && y >= 0 && y < lenY;
    const validWord = (word) => word.every(pos => isValidXY(pos));
    return words.filter(validWord);
};
const foundWords = (words, grid) => {
    const getWordFromGrid = (word) => word.map(([x, y]) => grid[y][x]).join('');
    return words.map(getWordFromGrid);
};
const isXmas = (word) => word == 'AMMSS' || word == 'ASMSM' || word == 'AMSMS' || word == 'ASSMM';
const part1 = (grid, word) => {
    return _.flow([_.curryRight(pointExtension)(word.length),
        _.curryRight(potentialWords)(grid),
        _.curryRight(validWords)(grid),
        _.curryRight(foundWords)(grid)])()
        .filter((w) => w == word)
        .length;
};
const part2 = (grid) => {
    // const a = xExtension([0, 0])
    // log(a)
    return _.flow([
        _.curryRight(xExtension),
        _.curryRight(potentialWords)(grid),
        _.curryRight(validWords)(grid),
        _.curryRight(foundWords)(grid),
    ])()
        .filter(isXmas)
        .length;
};
const parse = (data) => (data.trim().split('\n').map(n => n.trim().split('')));
const solvePart1 = (data) => {
    return part1(parse(data), 'XMAS');
};
const solvePart2 = (data) => {
    return part2(parse(data));
};
export { solvePart1, solvePart2 };
//# sourceMappingURL=AOC2024_Day04.js.map