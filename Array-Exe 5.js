const numbers  = [1,2,3,4,5,3];
const count = countOccurances(numbers, 2);

console.log(count);

function countOccurances(array, searchElement){
    const count= array.reduce((accumulator, currentValue) => {
            return currentValue === searchElement? accumulator + 1: accumulator +0;
    },0);
    return count;
}