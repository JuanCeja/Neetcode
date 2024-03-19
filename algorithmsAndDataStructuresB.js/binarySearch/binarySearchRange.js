const binarySearch = (low, high) => {
    let mid;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);

        if (isCorrect(mid) > 0) high = mid - 1;
        else if (isCorrect(mid) < 0) low = mid + 1;
        else return mid;
    }
    return -1;
}

const isCorrect = (n) => {
    if (n < 10) return 1;
    else if (n > 10) return -1;
    else return 0;
}