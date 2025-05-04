import * as _ from 'lodash-es';
const calMultiplication = (str) => {
    const mulPattern = /mul\(\d+,\d+\)/g;
    const argsPattern = /(\d+),(\d+)/;
    const muls = str.match(mulPattern);
    const result = muls?.map(args => {
        const r = argsPattern.exec(args);
        return [Number(r && r[1]), Number(r && r[2])];
    });
    return result && result.map(args => {
        return args.reduce(_.multiply, 1);
    });
};
const part1 = (memory) => _.sum(calMultiplication(memory));
const part2 = (memory) => _.sum(memory.split('do()')
    .map(x => calMultiplication(x.split('don\'t()')[0]))
    .map(_.sum));
const parse = (data) => data.trim();
const solvePart1 = (data) => {
    return part1(parse(data));
};
const solvePart2 = (data) => {
    return part2(parse(data));
};
export { solvePart1, solvePart2 };
//# sourceMappingURL=AOC2024_Day03.js.map