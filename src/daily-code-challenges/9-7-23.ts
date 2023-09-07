// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

export const pigIt = (a: string): string => {
  const solution: string[] = [];
  a.split(' ').forEach((word) => {
    const isPunctuation = !!word.match(regex);

    if (isPunctuation) {
      solution.push(word);
    } else {
      const wordArray = word.split('');
      const firstLetter = wordArray.shift();
      if (firstLetter) {
        wordArray.push(`${firstLetter}ay`);
        solution.push(wordArray.join(''));
      } else {
        return null;
      }
    }
  });
  return solution.join(' ');
};
