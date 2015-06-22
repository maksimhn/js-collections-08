'use strict';

var collections = require('../lib/collections.js');

describe('collections', function() {

  describe('normalized words', function() {

    var normalizedWords = [];

    it('has the correct length', function() {
      expect(collections.normalizedWords.length).toBe(0);
    });

    it('matches expected array', function() {
      expect(collections.normalizedWords).toEqual(normalizedWords);
    });

  });

  describe('unique words', function() {

    var uniqueWords = [];

    it('has the correct length', function() {
      expect(collections.uniqueWords.length).toBe(0);
    });

    it('matches expected array', function() {
      expect(collections.normalizedWords).toEqual(uniqueWords);
    });

  });

  describe('word frequencies', function() {

    var wordFrequencies = {};

    var wordFrequenciesKeys = [];

    var keys = [];
    var i = 0;

    //jscs:disable disallowEmptyBlocks
    for (keys[i++] in collections.wordFrequencies) {} // jshint ignore:line
    //jscs:enable disallowEmptyBlocks

    it('has the correct length', function() {
      expect(keys.length).toBe(0);
    });

    it('matches keys to expected array', function() {
      expect(keys).toEqual(wordFrequenciesKeys);
    });

  });

});
