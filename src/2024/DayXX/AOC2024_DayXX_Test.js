import { describe, test, expect } from 'vitest';
import { data } from './AOC2024_DayXX_Data.js';
import { data as sampleData } from './AOC2024_DayXX_Data_Sample.js';
import { solvePart1, solvePart2 } from './AOC2024_DayXX.js';
describe('2024 DayXX', () => {
    test('Part 1 - Sample Data', () => {
        const result = solvePart1(sampleData);
        const expected = 0;
        expect(result).toEqual(expected);
    });
    test('Part 1 - Solve', () => {
        const result = solvePart1(data);
        const expected = 1;
        expect(result).toEqual(expected);
    });
    test('Part 2 - Sample Data', () => {
        const result = solvePart2(sampleData);
        const expected = 0;
        expect(result).toEqual(expected);
    });
    test('Part 2 - Solve', () => {
        const result = solvePart2(data);
        const expected = 1;
        expect(result).toEqual(expected);
    });
});
//# sourceMappingURL=AOC2024_DayXX_Test.js.map