import { Example } from '../src/index.js';
import { describe, expect, it } from 'vitest';
describe('Example class', () => {
    it('should create an instance using its constructor', () => {
        const example = new Example();
        expect(example).toBeDefined();
    });
    it('should return whatever is passed to exampleMethod()', () => {
        const example = new Example();
        const param = 'This is my param.';
        const returnValue = example.exampleMethod(param);
        expect(returnValue).toEqual(param);
    });
});
//# sourceMappingURL=index.test.js.map