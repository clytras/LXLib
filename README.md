# LytraX JS/TS library

A collection of useful functions/classes for string/time manipulation, math/random calculations and encryption.

## Functions

### `bitCount32` from `math`

```javascript
import { bitCount32 } from '@lytrax/lxlib/math';

const bitLength = bitCount32(0x55555555); // 16 flagged bits
```

### `randomColor` from `random`

```javascript
import { randomColor } from '@lytrax/lxlib/random';

const cssRandomColor = randomColor();
```

### `randomInt` from `random`

```javascript
import { randomInt } from '@lytrax/lxlib/random';

const randInt = randomInt(1, 100);
```

### `randomIntNotIn` from `random`

```javascript
import { randomIntNotIn } from '@lytrax/lxlib/random';

// randInt <=> 1..10 and <> 2, 4, 6
const randInt = randomIntNotIn(1, 10, [2, 4, 6]);
```

### `randomIndex` from `random`

```javascript
import { randomIndex } from '@lytrax/lxlib/random';

index = randomIndex(10); // index range 0..9
index = randomIndex(10, { inclusive: true }); // index range 0..10
index = randomIndex(10, { startFrom: 2 }); // index range 2..9
```

### `dice` from `random`

```javascript
import { dice } from '@lytrax/lxlib/random';

const diceValue = dice(6);
```

### `sleep` from `time`

```javascript
import { sleep } from '@lytrax/lxlib/time';

await sleep(500);
```

### `uts` from `time`

```javascript
import { uts } from '@lytrax/lxlib/time';

const unixTimeStamp = uts(); // UTS in seconds
```

### `utsj` from `time`

```javascript
import { utsj } from '@lytrax/lxlib/time';

const unixTimeStampMillis = utsj(); // UTS in milliseconds
```

### `timeHash` from `time`

```javascript
import { timeHash } from '@lytrax/lxlib/time';

const hash = timeHash(); // kkluv4t0
```

### `dayKey` from `time`

```javascript
import { dayKey } from '@lytrax/lxlib/time';

const key = dayKey({ year: 2021, ordinal: 111 }); // 2021111
const resolved = dayKey.resolve(key); // { year: 2021, ordinal: 111 }
```

### `monthKey` from `time`

```javascript
import { monthKey } from '@lytrax/lxlib/time';

const key = monthKey({ year: 2021, month: 7 }); // 202107
const resolved = monthKey.resolve(key); // { year: 2021, month: 7 }
```

### `dateKey` from `time`

```javascript
import { dateKey } from '@lytrax/lxlib/time';

const key = dateKey({ year: 2021, month: 7, day: 1 }); // 20210701
const resolved = dateKey.resolve(key); // { year: 2021, month: 7, day: 1 }
```

### `minuteKey` from `time`

```javascript
import { minuteKey } from '@lytrax/lxlib/time';

const key = minuteKey({ hour: 23, minute: 30 }); // 2330
const resolved = minuteKey.resolve(key); // { hour: 23, minute: 30, second: 0 }
```

### `timeKey` from `time`

```javascript
import { timeKey } from '@lytrax/lxlib/time';

const key = timeKey({ hour: 23, minute: 30, second: 59 }); // 233059
const resolved = minuteKey.timeKey(key); // { hour: 23, minute: 30, second: 59 }
```

### `toFormData` from `utils`

```javascript
import { toFormData } from '@lytrax/lxlib/utils';

const formData = toFormData({
  some: 'Some',
  values: 123
});
```

### `fetchTimeout` from `utils`

```javascript
import { fetchTimeout } from '@lytrax/lxlib/utils';

// Will timeout after 5s if fetch won't get a reply
fetchTimeout('https://myurl.data',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  },
  5000 // Timeout in milliseconds
);
```

### `normalizeGreek` from `string`

```javascript
import { normalizeGreek } from '@lytrax/lxlib/string';

normalizeGreek('Ελληνικό κείμενο που θα φύγουν οι τόνοι');
```

### `camelize` from `string`

```javascript
import { camelize } from '@lytrax/lxlib/string';

camelize('Some text to camelize'); // "SomeTextToCamelize"
```

### `toTitleCase` from `string`

```javascript
import { toTitleCase } from '@lytrax/lxlib/string';

toTitleCase('Some text to title case') // "Some Text To Title Case"
```

### `toSentence` from `string`

```javascript
import { toSentence } from '@lytrax/lxlib/string';

toSentence('Some Text TO SENTENCE') // "Some text to sentence"
```

### `makeLines` from `string`

```javascript
import { makeLines } from '@lytrax/lxlib/string';

makeLines({ lines: ['make', 'some', 'lines'] }) // "make↵some↵lines"
```

### `nl2br` from `string`

```javascript
import { nl2br } from '@lytrax/lxlib/string';

nl2br('Some\ntext\nwith\nlines') // "Some<br/>text<br/>with<br/>lines"
```

### `removeAllWhitespaces` from `string`

```javascript
import { removeAllWhitespaces } from '@lytrax/lxlib/string';

removeAllWhitespaces('Text   With \tWitespaces\t\t') // "TextWithWitespaces"
```

### `decodeHtmlCharCodes` from `string`

```javascript
import { decodeHtmlCharCodes } from '@lytrax/lxlib/string';

decodeHtmlCharCodes('This&#32;is&#10;some&#32;text') // "This is↵some text"
```

### `toJsonIntended` from `string`

```javascript
import { toJsonIntended } from '@lytrax/lxlib/string';

toJsonIntended({some: 'Some', one: 1})
// {
//   "some": "Some",
//   "one": 1
// }
```

### `format` from `string`

```javascript
import { format } from '@lytrax/lxlib/string';

format('My name is {name} and my IQ is {IQ}', { name: 'Christos', IQ: 111 })
// "My name is Christos and my IQ is 111"
```

### `translateBool` from `string`

```javascript
import { translateBool } from '@lytrax/lxlib/string';

translateBool('Yes') // true
```

### `quoteSingle` from `string`

```javascript
import { quoteSingle } from '@lytrax/lxlib/string';

quoteSingle('test') // "'test'"
```

### `quoteDouble` from `string`

```javascript
import { quoteDouble } from '@lytrax/lxlib/string';

quoteDouble('test') // ""test""
```

### `quoteBacktick` from `string`

```javascript
import { quoteBacktick  } from '@lytrax/lxlib/string';

quoteBacktick('test') // "`test`"
```

### `quoteLRSingle` from `string`

```javascript
import { quoteLRSingle } from '@lytrax/lxlib/string';

quoteLRSingle('test') // "‘test’"
```

### `quoteLRDouble` from `string`

```javascript
import { quoteLRDouble } from '@lytrax/lxlib/string';

quoteLRDouble('test') // "“test”"
```

### `quote` from `string`

```javascript
import { quote } from '@lytrax/lxlib/string';

quote('test', 'backtick') // "`test`"
```

### `quoteIf` from `string`

```javascript
import { quoteIf } from '@lytrax/lxlib/string';

quoteIf('', 'single') // ""
```

### `numToSSColumn` from `string`

```javascript
// Number to SpreadSheet column
import { numToSSColumn } from '@lytrax/lxlib/string';

numToSSColumn(29) // "AC"
```

### `uniqueChars` from `string`

```javascript
// Number to SpreadSheet column
import { uniqueChars } from '@lytrax/lxlib/string';

uniqueChars('ABCabcABCabc/iumi/') // "ABCabc/ium"
```

### `applyBackspaceChar` from `string`

```javascript
// Apply all backspaces to the string
import { applyBackspaceChar } from '@lytrax/lxlib/string';

applyBackspaceChar('Test small\b\b\b\b\b line!\b') // "Test line"
```

### `removeRepeatedChars` from `string`

```javascript
// Remove all/selected repeated characters from the string
import { removeRepeatedChars } from '@lytrax/lxlib/string';

removeRepeatedChars('aa bbb word aaa cat aaaa cccc') // "a b word a cat a c"
removeRepeatedChars('This   is  aaa test', ' ') // "This is aaa test"
removeRepeatedChars('This   is  aaa test', ' a') // "This is a test"
```

## Classes

### `Cryptr` from `crypto/cryptr`

```javascript
// https://github.com/MauriceButler/cryptr with options
import Cryptr from '@lytrax/lxlib/crypto/cryptr';

const cryptr = new Cryptr('mysecret', {
  algorithm: 'aes-256-gcm',  // 'aes-256-gcm' is the default value
  encoding: 'base64'         // 'base64' is the default value
});

const encryptedBase64 = cryptr.encrypt('Some data');
const decryptedData = cryptr.decrypt(encryptedBase64);
```

## Development

- Commit changes to GitHub using [commitizen][commitizen] `git cz`

## Publish

Always commit everything before publishing new releases.

1. `yarn build` to build the distribution files
2. `yarn deploy` or `np --contents=release` to bump version, run release script and publish to NPM and GitHub

Running `np` will have the `version` script executed which will run the `makeRelease` script.

## License

MIT [LICENSE][license]

[commitizen]: https://github.com/commitizen/cz-cli
[license]: https://github.com/clytras/LXLib/blob/master/LICENSE
