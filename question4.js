import spelling from 'spelling';
import dictionaryUSEnglish from 'spelling/dictionaries/en_US.js';

let dictionary = new spelling(dictionaryUSEnglish);

console.log(dictionary.lookup('super'));
console.log(dictionary.lookup('guppy'));
console.log(dictionary.lookup('bipz'));