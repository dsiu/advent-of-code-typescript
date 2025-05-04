import { describe, test, expect } from 'vitest';
import { data } from './AOC2024_Day03_Data.js';
import { data1 as sampleData1 } from './AOC2024_Day03_Data_Sample.js';
import { data2 as sampleData2 } from './AOC2024_Day03_Data_Sample.js';
import { solvePart1, solvePart2 } from './AOC2024_Day03.js';
describe('2024 Day03', () => {
    test('Part 1 - Sample Data', () => {
        const result = solvePart1(sampleData1);
        const expected = 161;
        expect(result).toEqual(expected);
    });
    test('Part 1 - Solve', () => {
        const result = solvePart1(data);
        const expected = 182780583;
        expect(result).toEqual(expected);
    });
    test('Part 2 - Sample Data', () => {
        const result = solvePart2(sampleData2);
        const expected = 48;
        expect(result).toEqual(expected);
    });
    test('Part 2 - Solve', () => {
        const result = solvePart2(data);
        const expected = 90772405;
        expect(result).toEqual(expected);
    });
});
//# sourceMappingURL=AOC2024_Day03_Test.js.map