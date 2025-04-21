import {describe, test, expect} from 'vitest'

import {data} from './AOC2024_Day02_Data.js'
import {data as sampleData} from './AOC2024_Day02_Data_Sample.js'
import {solvePart1, solvePart2} from './AOC2024_Day02.js'

 
describe('2024 Day02', () => {
	test('Part 1 - Sample Data', () => {
		const result = solvePart1(sampleData)
		const expected = 2

		expect(result).toEqual(expected)
	})

	test('Part 1 - Solve', () => {
		const result = solvePart1(data)
		const expected = 686

		expect(result).toEqual(expected)
	})

	test('Part 2 - Sample Data', () => {
		const result = solvePart2(sampleData)
		const expected = 4

		expect(result).toEqual(expected)
	})

	test('Part 2 - Solve', () => {
		const result = solvePart2(data)
		const expected = 717

		expect(result).toEqual(expected)
	})
})
