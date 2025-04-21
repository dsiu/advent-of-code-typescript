import * as _ from 'lodash-es';
const transpose = (m) => _.zip(...m);
const part1 = (l1, l2) => _.sum(_.zipWith(l1.toSorted(), l2.toSorted(), (a, b) => a && b && Math.abs(a - b)));
const part2 = (l1, l2) => _.sum(l1.map(a => a && a * l2.filter(b => b && (b === a)).length));
// Notes: Implicit return works in when no {} is used to surround the function body
const parse = (data) => {
    const parsed = transpose(data.split('\n').map(l => l.trim().split('   ').map(n => Number(n))));
    return parsed.length === 2 && parsed.every(l => l.every(n => n !== undefined))
        ? parsed // it is safe to cast here
        : undefined;
};
const solvePart1 = (data) => {
    const parsed = parse(data);
    if (parsed === undefined) {
        throw new Error('Invalid input data');
    }
    const [l1, l2] = parsed;
    return part1(l1, l2);
};
const solvePart2 = (data) => {
    const parsed = parse(data);
    if (parsed === undefined) {
        throw new Error('Invalid input data');
    }
    const [l1, l2] = parsed;
    return part2(l1, l2);
};
export { solvePart1, solvePart2 };
//# sourceMappingURL=AOC2024_Day01.js.map