import { isString } from './index';

describe('Utility library', () => {
    describe('isString method', () => {
        it('should return true if have a string as a param', () => {
            expect(isString('teste')).toBe(true);
        });

        it('should return false if receive Array as a param', () => {
            expect(isString([])).toBe(false);
        });

        it('should return false if receive Number as a param', () => {
            expect(isString(1)).toBe(false);
        });

        it('should return false if not receive a param', () => {
            expect(isString()).toBe(false);
        });
    });
});
