type t = [number, number];
export declare class Direction {
    static north: ([x, y]: t) => t;
    static east: ([x, y]: t) => t;
    static south: ([x, y]: t) => t;
    static west: ([x, y]: t) => t;
    static northEast: (c: t) => t;
    static northWest: (c: t) => t;
    static southEast: (c: t) => t;
    static southWest: (c: t) => t;
}
type StepFunctionT = (c: t) => t;
export declare class StepFunctions {
    static stepFunc: (c: t, f: (c: t) => t) => t;
    static stepN: StepFunctionT;
    static stepE: StepFunctionT;
    static stepS: StepFunctionT;
    static stepW: StepFunctionT;
    static stepNE: StepFunctionT;
    static stepNW: StepFunctionT;
    static stepSE: StepFunctionT;
    static stepSW: StepFunctionT;
}
export {};
