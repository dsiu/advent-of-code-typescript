import * as _ from 'lodash-es';
const isInc = (report) => report.every(x => x > 0);
const isDec = (report) => report.every(x => x < 0);
const isDiffMinOne = (report) => report.every(x => Math.abs(x) >= 1);
const isDiffMaxThree = (report) => report.every(x => Math.abs(x) <= 3);
const diff = (x, y) => y - x;
const isSafe = (report) => {
    const len = report.length;
    const a = report.slice(0, len - 1); // except last element
    const b = report.slice(-len + 1); // except first element
    const diffs = _.zipWith(a, b, diff);
    return (isInc(diffs) || isDec(diffs)) && isDiffMinOne(diffs) && isDiffMaxThree(diffs);
};
const removeNthElem = (xs, i) => xs.toSpliced(i, 1);
const isSafeWithTolerance = (report) => isSafe(report) || report.some((_, i) => isSafe(removeNthElem(report, i)));
const countCondMet = (reports, cond) => reports.filter(cond).length;
const part1 = (reports) => countCondMet(reports, isSafe);
const part2 = (reports) => countCondMet(reports, isSafeWithTolerance);
const parse = (data) => data.trim().split('\n').map(l => l.trim().split(' ').map(Number));
const solvePart1 = (data) => {
    return part1(parse(data));
};
const solvePart2 = (data) => {
    return part2(parse(data));
};
export { solvePart1, solvePart2 };
//# sourceMappingURL=AOC2024_Day02.js.map