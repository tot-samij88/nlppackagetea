# NLP Package Tea

This npm package provides a simple yet effective tool for Natural Language Processing (NLP) tasks in JavaScript using the Natural library.

## Installation

You can install the package via npm:

```bash
npm install nlp-package
Usage
javascript
Copy code
// Import the NLP class
const NLP = require('nlp-package');

// Instantiate the NLP class
const nlp = new NLP();

// Example text
const text = "This is a sample sentence for testing the NLP package.";

// Tokenize text into words
const tokens = nlp.tokenize(text);
console.log(tokens);

// Perform part-of-speech tagging
const posTags = nlp.posTag(text);
console.log(posTags);

// Perform sentiment analysis
const sentiment = nlp.sentimentAnalysis(text);
console.log(sentiment);
API
new NLP()
Creates a new instance of the NLP class.

tokenize(text)
Tokenizes the input text into words.

text: The input text to tokenize.
posTag(text)
Performs part-of-speech tagging on the input text.

text: The input text for part-of-speech tagging.
sentimentAnalysis(text)
Performs sentiment analysis on the input text.

text: The input text for sentiment analysis.
Example
Check out the example.js file for a simple usage example.

License
This project is licensed under the MIT License - see the LICENSE file for details.