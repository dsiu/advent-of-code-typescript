export class Direction {
    static north = ([x, y]) => [x, y - 1];
    static east = ([x, y]) => [x + 1, y];
    static south = ([x, y]) => [x, y + 1];
    static west = ([x, y]) => [x - 1, y];
    static northEast = (c) => Direction.east(Direction.north(c));
    static northWest = (c) => Direction.west(Direction.north(c));
    static southEast = (c) => Direction.east(Direction.south(c));
    static southWest = (c) => Direction.west(Direction.south(c));
}
export class StepFunctions {
    static stepFunc = (c, f) => f(c);
    static stepN = (c) => StepFunctions.stepFunc(c, Direction.north);
    static stepE = (c) => StepFunctions.stepFunc(c, Direction.east);
    static stepS = (c) => StepFunctions.stepFunc(c, Direction.south);
    static stepW = (c) => StepFunctions.stepFunc(c, Direction.west);
    static stepNE = (c) => StepFunctions.stepFunc(c, Direction.northEast);
    static stepNW = (c) => StepFunctions.stepFunc(c, Direction.northWest);
    static stepSE = (c) => StepFunctions.stepFunc(c, Direction.southEast);
    static stepSW = (c) => StepFunctions.stepFunc(c, Direction.southWest);
}
//# sourceMappingURL=Coordinate.js.map