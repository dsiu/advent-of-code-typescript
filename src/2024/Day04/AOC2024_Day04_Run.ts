const log = console.log

 
// import {data} from './AOC2024_Day04_Data.js'
import {data as sampleData} from './AOC2024_Day04_Data_Sample.js'
import {solvePart1, solvePart2} from './AOC2024_Day04.js'


console.time('Part 1')

const part1 = solvePart1(sampleData)
// let part1 = solvePart1(data)

log('Part 1 Result')
log(part1)
console.timeEnd('Part 1')

log('----------')

console.time('Part 2')

const part2 = solvePart2(sampleData)
// const part2 = solvePart2(data)

log('Part 2 Result')
log(part2)
console.timeEnd('Part 2')
