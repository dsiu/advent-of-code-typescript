 
import * as _ from 'lodash-es'

 
const parse = (data: string) =>
  _.sum(data.split('\n').map(n =>
    Number(n)
  ))


 
const solvePart1 = (data: string): number => {
  return parse(data)
}

 
const solvePart2 = (data: string): number => {
  return parse(data)
}

export {solvePart1, solvePart2}
