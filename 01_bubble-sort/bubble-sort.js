// // Create our input data
const unsortedInputArray = [];

// // seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// const unsortedInputArray = [2, 42, 100, 23, 500, 34];
// counter 1  (i)           ^
// counter 2  (j)           ^      

// QUESTIONS
// assume always array of numbers? Yes
// maximum array lenght: 2000
// can I run code to debug?

// TODO: create bubble sort function
const bubbleSort = (array) => {
    // for each index in the array...
    for (let i = 0; i < array.length; i++) {
        // loop through entire array
        for (let j = 0; j < array.length; j++) {
            // switch values as needed
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }

        }

    }

    return array;
};

const sorted = bubbleSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');