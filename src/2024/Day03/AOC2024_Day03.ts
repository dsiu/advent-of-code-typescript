import {Option} from 'effect'
import * as _ from 'lodash-es'

const calMultiplication = (str: string): Option.Option<number[]> => {
  const mulPattern = /mul\(\d+,\d+\)/g
  const argsPattern = /(\d+),(\d+)/

  return Option.fromNullable(str.match(mulPattern)).pipe(
    Option.map(muls =>
      muls
        .map(args =>
          Option.fromNullable(argsPattern.exec(args)).pipe(
            Option.filter(r => r[1] != null && r[2] != null),
            Option.map(r => [Number(r[1]), Number(r[2])])
          )
        )
        .filter(Option.isSome)
        .map(opt => opt.value)
        .map(args => args.reduce(_.multiply, 1))
    )
  )
}

const part1 = (memory: string): number =>
  _.sum(
    Option.getOrThrowWith(calMultiplication(memory), () => new Error('No multiplication found')))

const part2 = (memory: string): number =>
  _.sum(
    memory.split('do()')
      .map(x => Option.getOrThrowWith(calMultiplication(x.split('don\'t()')[0]),
        () => new Error('No multiplication found')))
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
