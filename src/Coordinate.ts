type t = [number, number]

export class Direction {

  static north = ([x, y]: t): t => [x, y - 1]
  static east = ([x, y]: t): t => [x + 1, y]
  static south = ([x, y]: t): t => [x, y + 1]
  static west = ([x, y]: t): t => [x - 1, y]
  static northEast = (c: t): t => Direction.east(Direction.north(c))
  static northWest = (c: t): t => Direction.west(Direction.north(c))
  static southEast = (c: t): t => Direction.east(Direction.south(c))
  static southWest = (c: t): t => Direction.west(Direction.south(c))
}

type StepFunctionT = (c: t) => t

export class StepFunctions {

  static stepFunc = (c: t, f: (c: t) => t) => f(c)

  static stepN: StepFunctionT = (c: t): t => StepFunctions.stepFunc(c, Direction.north)
  static stepE: StepFunctionT = (c: t): t => StepFunctions.stepFunc(c, Direction.east)
  static stepS: StepFunctionT = (c: t): t => StepFunctions.stepFunc(c, Direction.south)
  static stepW: StepFunctionT = (c: t): t => StepFunctions.stepFunc(c, Direction.west)
  static stepNE: StepFunctionT = (c: t): t => StepFunctions.stepFunc(c, Direction.northEast)
  static stepNW: StepFunctionT = (c: t): t => StepFunctions.stepFunc(c, Direction.northWest)
  static stepSE: StepFunctionT = (c: t): t => StepFunctions.stepFunc(c, Direction.southEast)
  static stepSW: StepFunctionT = (c: t): t => StepFunctions.stepFunc(c, Direction.southWest)
}
