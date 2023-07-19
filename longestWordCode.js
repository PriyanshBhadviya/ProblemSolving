function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';

    for (const word of words) {
        // Removing punctuation marks from the word
        // You can add more characters to the punctuations string if needed
        const punctuations = '.,!?;:\'"(){}[]';
        const cleanedWord = word.replace(new RegExp('[' + punctuations + ']', 'g'), '');

        // Update longestWord if the current word is longer
        if (cleanedWord.length > longestWord.length) {
            longestWord = cleanedWord;
        }
    }

    return longestWord;
}

// Example usage:
const sentence = "We are seeing Stale total dataobject count for past 1 week for BigQuery";
const longestWord = findLongestWord(sentence);
console.log("Longest word in the sentence:", longestWord);

