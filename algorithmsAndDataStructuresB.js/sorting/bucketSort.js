const bucketSort = (arr) => {
    const counts = [0, 0, 0];

    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]]++;
    }
    console.log(counts)
    let pointer = 0;

    for (let i = 0; i < counts.length; i++) {
        for (let j = 0; j < counts[i]; j++) {
            arr[pointer] = i;
            pointer++;
        }
    }

    return arr;
}

console.log(bucketSort([2, 1, 2, 0, 0, 2])); // [0, 0, 1, 2, 2]