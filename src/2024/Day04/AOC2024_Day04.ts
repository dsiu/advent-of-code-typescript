import * as _ from 'lodash-es'
import * as C from '../../Coordinate'

// const log = console.log
// const dir = console.dir

const StepFn = C.StepFunctions
type StepFnT = C.StepFunctionT

type extensionFn = (coord: C.t) => C.t[][]

const pointExtension = (startPos: C.t, steps: number): C.t[][] => {
  const directions: StepFnT[] = [StepFn.stepNW, StepFn.stepN, StepFn.stepNE, StepFn.stepW,
                                 StepFn.stepE, StepFn.stepSW, StepFn.stepS, StepFn.stepSE]

  return directions.map(f => {
    const loop = (acc: C.t[], cur: C.t, i: number): C.t[] => {
      const next = f(cur)
      return (i >= steps - 1) ? acc : loop([...acc, next], next, i + 1)
    }
    return loop([startPos], startPos, 0)
  })
}

const xExtension = (c: C.t): C.t[][] =>
  [[c, StepFn.stepNW(c), StepFn.stepNE(c), StepFn.stepSW(c), StepFn.stepSE(c)]]


const potentialWords = (exts: extensionFn, grid: string[][]) => {
  return grid.reduce((acc: C.t[], innerArr: C.t[], outerIndex: number) => {

    const innerResult = innerArr.reduce((acc: C.t[], elem: C.t, innerIndex: number) => {
      return [...acc, ...exts([innerIndex, outerIndex])]
    }, [] as C.t[])

    return [...acc, ...innerResult]
  }, [] as C.t[])
}

const validWords = (words: C.t[][], grid: string[][]): C.t[][] => {
  const lenY = grid.length
  const lenX = grid[0].length
  const isValidXY = ([x, y]: C.t): boolean => x >= 0 && x < lenX && y >= 0 && y < lenY

  const validWord = (word: C.t[]): boolean => word.every(pos => isValidXY(pos))
  return words.filter(validWord)
}

const foundWords = (words: C.t[][], grid: string[][]): string[] => {
  const getWordFromGrid = (word: C.t[]): string => word.map(([x, y]) => grid[y][x]).join('')
  return words.map(getWordFromGrid)
}

const isXmas = (word: string): boolean =>
  word == 'AMMSS' || word == 'ASMSM' || word == 'AMSMS' || word == 'ASSMM'


const part1 = (grid: string[][], word: string): number => {
  return _.flow([_.curryRight(pointExtension)(word.length),
                 _.curryRight(potentialWords)(grid),
                 _.curryRight(validWords)(grid),
                 _.curryRight(foundWords)(grid)])()
    .filter((w: string) => w == word)
    .length
}

const part2 = (grid: string[][]): number => {
  // const a = xExtension([0, 0])
  // log(a)
  return _.flow([
    _.curryRight(xExtension),
    _.curryRight(potentialWords)(grid),
    _.curryRight(validWords)(grid),
    _.curryRight(foundWords)(grid),
  ])()
    .filter(isXmas)
    .length
}

const parse = (data: string) =>
  (data.trim().split('\n').map(n =>
    n.trim().split('')
  ))

const solvePart1 = (data: string): number => {
  return part1(parse(data), 'XMAS')
}


const solvePart2 = (data: string): number => {
  return part2(parse(data))
}

export {solvePart1, solvePart2}
