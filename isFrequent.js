/* Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences. */

function isFrequent(text) {
    const cleanedText = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

    const words = cleanedText.split(/\s+/);

    const wordOccurrences = {};

    words.forEach(word => {
        wordOccurrences[word] = (wordOccurrences[word] || 0) + 1;
    });

    const wordArray = Object.entries(wordOccurrences).map(([word, count]) => ({ word, count }));

    wordArray.sort((a, b) => b.count - a.count);

    const top3Words = wordArray.slice(0, 3).map(item => item.word);

    return top3Words;
}

console.log(isFrequent("This is a sample text. Sample text is used for demonstration purposes. This text."))

