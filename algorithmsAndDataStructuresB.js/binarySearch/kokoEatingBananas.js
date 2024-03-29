// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.



// Example 1:
// Input: piles = [3,6,7,11], h = 8
// Output: 4

// Example 2:
// Input: piles = [30,11,23,4,20], h = 5
// Output: 30

// Example 3:
// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

const minEatingSpeed = (piles, h) => {
    let min = 1;
    let max = Math.max(...piles);
    let best = max;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        const timeToEat = speed => piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);

        if (timeToEat(mid) <= h) {
            best = mid;
            max = mid - 1;
        } else if (timeToEat(mid) > h) {
            min = mid + 1;
        }

    }

    return best;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23