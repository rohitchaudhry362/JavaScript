const numbers  = [1,2,3,4,5,30];

const max = getMax(numbers);

console.log(max);

function getMax(numbers){
    return numbers.reduce((accumulator,current) => {
        return accumulator > current ? accumulator: current;
    })
};