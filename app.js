
const reverseString = (text) => {
    if (text.length === 0) {
        return "";
    }
    const firstWord = text.split(' ')[0];
    const reversedFirstWord = firstWord.split('').reverse().join('');
    const remainingWords = text.substring(firstWord.length + 1);
    const reversedRemainingWords = reverseString(remainingWords);
    return reversedFirstWord + ' ' + reversedRemainingWords;
}


console.log('STRING>>>: ', reverseString("The quick brown fox"));
console.log('STRING>>>: ', reverseString("Swift Coding Challenges"));


Array.prototype.challenge37 = function (count) {
    let digitCount = 0;
    for (const num of this) {
        const numString = num.toString();
        for (const digit of numString) {
            if (digit === count) {
                digitCount++;
            }
        }
    }

    return digitCount;
};

const numbers1 = [5, 15, 55, 515];
const numbers2 = [5, 15, 55, 515];
const numbers3 = [55555];
const numbers4 = [55555];

const count1 = numbers1.challenge37('5');
const count2 = numbers2.challenge37('1');
const count3 = numbers3.challenge37('5');
const count4 = numbers4.challenge37('1');

console.log('Total 1', count1)
console.log('Total 2', count2)
console.log('Total 3', count3)
console.log('Total 4', count4)
