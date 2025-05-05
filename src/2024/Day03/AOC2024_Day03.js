import { Option } from 'effect';
import * as _ from 'lodash-es';
const calMultiplication = (str) => {
    const mulPattern = /mul\(\d+,\d+\)/g;
    const argsPattern = /(\d+),(\d+)/;
    return Option.fromNullable(str.match(mulPattern)).pipe(Option.map(muls => muls
        .map(args => Option.fromNullable(argsPattern.exec(args)).pipe(Option.filter(r => r[1] != null && r[2] != null), Option.map(r => [Number(r[1]), Number(r[2])])))
        .filter(Option.isSome)
        .map(opt => opt.value)
        .map(args => args.reduce(_.multiply, 1))));
};
const part1 = (memory) => _.sum(Option.getOrThrowWith(calMultiplication(memory), () => new Error('No multiplication found')));
const part2 = (memory) => _.sum(memory.split('do()')
    .map(x => Option.getOrThrowWith(calMultiplication(x.split('don\'t()')[0]), () => new Error('No multiplication found')))
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