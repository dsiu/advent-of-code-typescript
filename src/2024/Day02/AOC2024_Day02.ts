import * as _ from 'lodash-es'
// import * as Console from 'node:console';

// const log = Console.log

type Report = number[]
type Reports = Report[]

const isInc = (report: Report): boolean => report.every(x => x > 0)
const isDec = (report: Report): boolean => report.every(x => x < 0)
const isDiffMinOne = (report: Report): boolean => report.every(x => Math.abs(x) >= 1)
const isDiffMaxThree = (report: Report): boolean => report.every(x => Math.abs(x) <= 3)
const diff = (x: number, y: number) => y - x

const isSafe = (report: Report): boolean => {
  const len = report.length
  const a = report.slice(0, len - 1) // except last element
  const b = report.slice(-len + 1) // except first element
  const diffs = _.zipWith(a, b, diff)

  return (isInc(diffs) || isDec(diffs)) && isDiffMinOne(diffs) && isDiffMaxThree(diffs)
}

const removeNthElem = (xs: number[], i: number) => xs.toSpliced(i, 1)


const isSafeWithTolerance = (report: Report): boolean =>
  isSafe(report) || report.some((_, i) => isSafe(removeNthElem(report, i)));

const countCondMet = (reports: Reports,
  cond: (report: Report) => boolean): number => reports.filter(cond).length


const part1 = (reports: Reports): number =>
  countCondMet(reports, isSafe)


const part2 = (reports: Reports): number =>
  countCondMet(reports, isSafeWithTolerance)


const parse = (data: string): Reports =>
  data.trim().split('\n').map(l => l.trim().split(' ').map(Number))


const solvePart1 = (data: string): number => {
  return part1(parse(data))
}


const solvePart2 = (data: string): number => {
  return part2(parse(data))
}

export { solvePart1, solvePart2 }
