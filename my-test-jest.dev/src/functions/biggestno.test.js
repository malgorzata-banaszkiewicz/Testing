const biggestNumber = require('./biggestno');

it('should show biggest number in provided list', () => {
    expect(biggestNumber(1,2,3)).toBe(3);
});