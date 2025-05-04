import * as _ from 'lodash-es'


const calMultiplication = (str: string): number[] | undefined => {
  const mulPattern = /mul\(\d+,\d+\)/g
  const argsPattern = /(\d+),(\d+)/

  const muls: RegExpMatchArray | null = str.match(mulPattern)

  const result = muls?.map(args => {
    const r = argsPattern.exec(args)
    return [Number(r && r[1]), Number(r && r[2])]
  })


  return result && result.map(args => {
    return args.reduce(_.multiply, 1)
  })

}

const part1 = (memory: string): number =>
  _.sum(calMultiplication(memory))

const part2 = (memory: string): number =>
  _.sum(
    memory.split('do()')
      .map(x => calMultiplication(x.split('don\'t()')[0]))
      .map(_.sum)
  )

const parse = (data: string): string => data.trim()

const solvePart1 = (data: string): number => {
  return part1(parse(data))
}


const solvePart2 = (data: string): number => {
  return part2(parse(data))
}

export {solvePart1, solvePart2}
