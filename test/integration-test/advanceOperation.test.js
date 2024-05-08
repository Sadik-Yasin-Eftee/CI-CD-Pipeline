const calculator = require("../../src/advanceOperation");

describe('Integration Testing', () => {
    describe.each([
        [2, 3, 3, 2],
        [5, 4, 4, 1],
        [3, 12, 12, 0],
        [4, 6, 6, 4]
    ])('pow(a, b) and modulo(a, b)', (a, b, powExpected, moduloExpected) => {
        test(`pow(${a}, ${b}) and modulo(${a}, ${b})`, () => {
            const powResult = calculator.pow(a, b);
            const moduloResult = calculator.modulo(a, b);
            
            expect(powResult).toBe(powExpected);
            expect(moduloResult).toBe(moduloExpected);
        });
    });
});
