# LytraX JS/TS library

## Functions

### `randomColor` from `utils`

```javascript
import { randomColor } from '@lytrax/lxlib/utils';

const cssRandomColor = randomColor();
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


### `normalizeGreek` from `utils/string`

```javascript
import { normalizeGreek } from '@lytrax/lxlib/utils/string';

normalizeGreek('Ελληνικό κείμενο που θα φύγουν οι τόνοι');
```

## Classes

### `Cryptr` from `utils/cryptr`

```javascript
// https://github.com/MauriceButler/cryptr with options
import Cryptr from '@lytrax/lxlib/utils/cryptr';

const cryptr = new Cryptr('mysecret', {
  algorithm: 'aes-256-gcm',  // 'aes-256-gcm' is the default value
  encoding: 'base64'         // 'base64' is the default value
});

const encryptedBase64 = cryptr.encrypt('Some data');
const decryptedData = cryptr.decrypt(encryptedBase64);
```

## Development

- Commit changes to GitHub using [commitizen][commitizen] `git gz`

## Publish

Always commit everything before publishing new releases.

1. `yarn build` to build the distribution files
2. `yarn deploy` or `np --contents=release` to bump version, run release script and publish to NPM and GitHub

Running `np` will have the `version` script executed which will run the `makeRelease` script.

## License

MIT [LICENSE][license]

[commitizen]: https://github.com/commitizen/cz-cli
[license]: https://github.com/clytras/LXLib/blob/master/LICENSE
