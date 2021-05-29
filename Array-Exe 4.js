const numbers = [1,2,3,4];

const output = move(numbers,0,0);

console.log(output);
console.log(numbers);

function move(array, index, offset){
    let arrayLength = array.length;
    let maxPositiveOffset = arrayLength - index - 1;
    let maxNegativeOffset = -index; 
    if(offset > maxPositiveOffset || offset < maxNegativeOffset)
        return console.error('Faulty Offset');
    let output = array.filter(x => array.indexOf(x) !== index)
    output.splice(index+offset, 0, array[index]);
    return output;
}