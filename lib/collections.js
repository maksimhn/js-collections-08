'use strict';

var paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume, among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';

// The paragraph split into a list
var words = [];
paragraph = paragraph.replace(/[^\w\s']+/g, '');
paragraph = paragraph.toLowerCase();
words = paragraph.split(' ');

// The word list normalized (all lower case with punctuation removed)
var normalizedWords = [];
normalizedWords = words;

// The words stored as keys of a dictionary
var uniqueWordsAsKeys = {};

for (var i = 0; i < normalizedWords.length; i++) {
  if (uniqueWordsAsKeys[normalizedWords[i]] === undefined) {
    uniqueWordsAsKeys[normalizedWords[i]] = 1;
  } else {
    uniqueWordsAsKeys[normalizedWords[i]] += 1;
  }
}

// The keys pulled out into a list
var uniqueWords = [];
for (var key in uniqueWordsAsKeys) {
    uniqueWords.push(key);
}

// The words as keys and the values the count of each word
var wordFrequencies = {};
wordFrequencies = uniqueWordsAsKeys;


module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  wordFrequencies: wordFrequencies
};
