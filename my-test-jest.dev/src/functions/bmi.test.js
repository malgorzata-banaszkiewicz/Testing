const BMICalculator = require('./bmi');

it('should provide correct BMI for given age, height and weight with description for ages 19-64', () => {
const result = BMICalculator(30, 1.68, 58.4);
expect(typeof result).toBe('string');
expect(result).toContain('Prawidłowe');
});

it('should return a message: Jesteś za młody, by martwić się BMI', () => {
    const result = BMICalculator(17, 1.55, 60);
    expect (typeof result).toBe('string');
    expect(result).toContain('Jesteś za młody');
});

it('should return a message: W tym wieku już nie musisz martwić się BMI', () => {
    const result = BMICalculator(80, 2, 88);
    expect (typeof result).toBe('string');
    expect(result).toContain('już nie musisz martwić się BMI');
});

it('should count the BMI', () => {
    const result = BMICalculator(30, 1.68, 58.4);
    expect(parseFloat(result.match(/([0-9]*\.?[0-9]+)/)[1])).toBeCloseTo(20.69);
});

it('should remind the user to provide correct data', () => {
    const result = BMICalculator('33', 1.55, 'nie wiem');
    expect(result).toMatch('Błędne dane');
});