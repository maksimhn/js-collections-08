'use strict';

var paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';

//The paragraph as
var words = [];

//
var normalizedWords = [];

var uniqueWordsAsKeys = {};

var uniqueWords = [];

var wordFrequencies = {};

module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  wordFrequencies: wordFrequencies
};

paragraph =
  'We the People of the United States, in Order to form a more ' +
  'perfect Union, establish Justice, insure domestic Tranquility, ' +
  'provide for the common defence, promote the general Welfare, and ' +
  'secure the Blessings of Liberty to ourselves and our Posterity, ' +
  'do ordain and establish this Constitution for the United States ' +
  'of America.';
