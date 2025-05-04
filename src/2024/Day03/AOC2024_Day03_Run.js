const log = console.log;
// import {data} from './AOC2024_Day03_Data.js'
import { data1 as sampleData1 } from './AOC2024_Day03_Data_Sample.js';
import { data2 as sampleData2 } from './AOC2024_Day03_Data_Sample.js';
import { solvePart1, solvePart2 } from './AOC2024_Day03.js';
console.time('Part 1');
const part1 = solvePart1(sampleData1);
// let part1 = solvePart1(data)
log('Part 1 Result');
log(part1);
console.timeEnd('Part 1');
log('----------');
console.time('Part 2');
const part2 = solvePart2(sampleData2);
// const part2 = solvePart2(data)
log('Part 2 Result');
log(part2);
console.timeEnd('Part 2');
//# sourceMappingURL=AOC2024_Day03_Run.js.map