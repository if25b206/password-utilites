# password-utilities

A simple Node.js library for working with passwords.
It can generate a random strong password and check if a given password is strong enough.

## Installation

Using npm:
```
npm install @if25b206/password-utilities
```

Using yarn:
```
yarn add @if25b206/password-utilities
```

## Usage

### generateStrongPassword

Generates a random password with the given length (default is 12).

```js
const { generateStrongPassword } = require('@if25b206/password-utilities');

const password = generateStrongPassword(16);
console.log(password); // e.g. "aB3!xYz9#Kl2mNpQ"
```

### isStrongPassword

Returns `true` if the password has at least 8 characters and contains uppercase letters,
lowercase letters, a number, and a special character. Otherwise returns `false`.

```js
const { isStrongPassword } = require('@if25b206/password-utilities');

console.log(isStrongPassword('abc'));       // false
console.log(isStrongPassword('Hello1!x')); // true
```

## Running Tests

```
npm test
```

## License

MIT
