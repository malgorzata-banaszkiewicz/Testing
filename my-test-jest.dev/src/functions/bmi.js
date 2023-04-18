function BMICalculator(age, height, weight) {

    if (typeof age !== 'number' || typeof height !== 'number' || typeof weight !== 'number') {
        return ('Błędne dane')
          }
    
    let BMI = weight / (height * height)

    if (age >= 19 && age <=24 && BMI >=19 && BMI <= 24 
    || age >= 25 && age <=34 && BMI >= 20 && BMI <= 25
    || age >= 35 && age <=44 && BMI >= 21 && BMI <= 26
    || age >= 45 && age <=54 && BMI >= 22 && BMI <= 27
    || age >= 55 && age <=64 && BMI >= 23 && BMI <= 28)
    {
    return BMI + " Prawidłowe"}
    
    else if (age >= 19 && age <=24 && BMI > 24
        || age >= 25 && age <=34 && BMI > 25
        || age >= 35 && age <=44 && BMI > 26
        || age >= 45 && age <=54 && BMI > 27
        || age >= 55 && age <=64 && BMI > 28
        ){
    return BMI + " Nadwaga"}
           
    else if (age >= 19 && age <=24 && BMI < 19
        || age >= 25 && age <=34 && BMI < 20
        || age >= 35 && age <=44 && BMI < 21
        || age >= 45 && age <=54 && BMI < 22
        || age >= 55 && age <=64 && BMI < 23
        ){
    return BMI + " Niedowaga"} 
        
    else if (age < 19) {
    return ('Jesteś za młody, by martwić się BMI')
    }
    else if (age > 64) {
    return ('W tym wieku już nie musisz martwić się BMI')
    }
   
}

module.exports = BMICalculator;