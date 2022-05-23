// TODO: Write your function in this file

const fizzBuzzValues = {
    fistNumber: {
        value: 3,
        string: 'Fizz'
    },

    secondNumber: {
        value: 5,
        string: 'Buzz'
    },

    bothNumbers: {
        string: 'FizzBuzz'
    }
}

function fizzBuzz(lower, upper) {
    let fizzBuzzList = []

    for(let i = lower; i <= upper; i++) {
        if(i % fizzBuzzValues.fistNumber.value === 0 && i % fizzBuzzValues.secondNumber.value !== 0) {
           fizzBuzzList.push(fizzBuzzValues.fistNumber.string) 
        } else if 
            (i % fizzBuzzValues.secondNumber.value === 0 && i % fizzBuzzValues.fistNumber.value !== 0) {
            fizzBuzzList.push(fizzBuzzValues.secondNumber.string)
            }
         else if 
         (i % fizzBuzzValues.fistNumber.value === 0 && i % fizzBuzzValues.secondNumber.value === 0) { fizzBuzzList.push(fizzBuzzValues.bothNumbers.string)     
        } 

         else {
        fizzBuzzList.push(i)
        }
}
    return fizzBuzzList;
}


// had to make sure i = lower and not 0

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
