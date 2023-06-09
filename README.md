# Strigo Utils

Strigo is a TypeScript library that provides a range of utility functions for string manipulation. Whether you're building a web application, working with text data, or just need to manipulate strings in your code.

But beware! Strigo can be a bit unpredictable. Sometimes it may turn your strings into frogs or send them to the moon. That's just the nature of magic. So if you're feeling brave, join the Strigo academy and unlock the full potential of your strings. Just remember to use your powers for good, not evil.

## Functions

#### \``camelize`\`
Converts a given string to camelCase.
```TypeScript
function camelize(str: string): string;
```

#### \``capitalize`\`
Capitalizes the first letter of a given string.
```TypeScript
function capitalize(str: string): string;
```

#### \``convertToSlug`\`
Converts a given string to a slug.
```TypeScript
function convertToSlug(text: string): string;
```

#### \``countWords`\`
Counts the number of words in a given string.
```TypeScript
function countWords(text: string): number;
```

#### \``generateRandomPassword`\`
Generates a random password with a given length.
```TypeScript
function generateRandomPassword(length: number): string;
```

#### \``limitStringByWord`\`
Limits the length of a given string by a specified number of words.
```TypeScript
function limitStringByWord(text: string, limit: number): string;
```

#### \``numberFormat`\`
Formats a given number with commas as thousands separators.
```TypeScript
function numberFormat(numValue: number, decimals: number = 0, decPoint: string = '.', thousandsSep: string = ' '): string;
```

#### \``translit`\`
Transliterates a given string from Cyrillic to Latin characters.
```TypeScript
function translit(text: string): string;
```

## How to Install
You can install this library using npm. First, navigate to your project directory in your terminal and run the following command:

```bash
npm install strigo
```

## Usage
To use this library, simply import the desired function and call it with the appropriate arguments. For example:

```TypeScript
import { camelize } from 'strigo';

const myString = 'hello world';
const camelizedString = camelize(myString);
console.log(camelizedString); // Output: 'helloWorld'
```

## Why strigo?
Strigo is also powerful and versatile. With a wide range of functions for string manipulation, it can handle almost any task you throw at it. Plus, it's written in TypeScript, which means you get all the benefits of static typing and type checking.

So if you're looking for a fun, powerful, and easy-to-use library for string manipulation, look no further than Strigo. Join the Strigo crew today and start wielding the magic of strings!

## License
This library is licensed under the [MIT License](https://opensource.org/license/mit/).

## Note
No strings were harmed in the making of this library.