import {describe, test, expect} from 'vitest'

import {data} from './AOC2024_Day04_Data.js'
import {data as sampleData} from './AOC2024_Day04_Data_Sample.js'
import {solvePart1, solvePart2} from './AOC2024_Day04.js'

 
describe('2024 Day04', () => {
	test('Part 1 - Sample Data', () => {
		const result = solvePart1(sampleData)
		const expected = 18

		expect(result).toEqual(expected)
	})

	test('Part 1 - Solve', () => {
		const result = solvePart1(data)
		const expected = 2549

		expect(result).toEqual(expected)
	})

	test('Part 2 - Sample Data', () => {
		const result = solvePart2(sampleData)
		const expected = 9

		expect(result).toEqual(expected)
	})

	test('Part 2 - Solve', () => {
		const result = solvePart2(data)
		const expected = 2003

		expect(result).toEqual(expected)
	})
})
