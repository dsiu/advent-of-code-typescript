import {describe, test, expect} from 'vitest'

import {data} from './AOC2024_Day01_Data.js'
import {data as sampleData} from './AOC2024_Day01_Data_Sample.js'
import {solvePart1, solvePart2} from './AOC2024_Day01.js'


describe('2024 Day01', () => {
  test('Part 1 - Sample Data', () => {
    const result = solvePart1(sampleData)
    const expected = 11

    expect(result).toEqual(expected)
  })

  test('Part 1 - Solve', () => {
    const result = solvePart1(data)
    const expected = 1889772

    expect(result).toEqual(expected)
  })

  test('Part 2 - Sample Data', () => {
    const result = solvePart2(sampleData)
    const expected = 31

    expect(result).toEqual(expected)
  })

  test('Part 2 - Solve', () => {
    const result = solvePart2(data)
    const expected = 23228917

    expect(result).toEqual(expected)
  })
})
