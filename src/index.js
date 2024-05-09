// nlp-package.js

// Import dependencies
const natural = require('natural');

// Define the NLP class
class NLP {
    constructor() {
        // Initialize the tokenizer
        this.tokenizer = new natural.WordTokenizer();
    }

    // Tokenize text into words
    tokenize(text) {
        return this.tokenizer.tokenize(text);
    }

    // Perform part-of-speech tagging
    posTag(text) {
        const tokenizer = new natural.TreebankWordTokenizer();
        const tokens = tokenizer.tokenize(text);
        return natural.BrillPOSTagger.tag(tokens);
    }

    // Perform sentiment analysis
    sentimentAnalysis(text) {
        const analyzer = new natural.SentimentAnalyzer();
        const stemmer = natural.PorterStemmer;
        const result = analyzer.getSentiment(this.tokenize(text));
        return result;
    }
}

// Export the NLP class
module.exports = NLP;
