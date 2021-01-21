// https://github.com/MauriceButler/cryptr
import crypto, { BinaryLike, CipherGCMTypes, CipherKey } from 'crypto';

const defaultAlgorithm: CipherGCMTypes = 'aes-256-gcm';
const defaultEncoding = 'base64';
const ivLength = 16;
const saltLength = 64;
const tagLength = 16;
const tagPosition = saltLength + ivLength;
const encryptedPosition = tagPosition + tagLength;

interface IOptions {
  algorithm: CipherGCMTypes;
  encoding:
    | 'base64'
    | 'ascii'
    | 'utf8'
    | 'utf-8'
    | 'utf16le'
    | 'ucs2'
    | 'ucs-2'
    | 'latin1'
    | 'binary'
    | 'hex'
    | undefined;
}

export default class Cryptr {
  options: IOptions;
  secret: string | Buffer;

  constructor(secret: string | Buffer, options?: IOptions) {
    this.options = Object.assign(
      {
        algorithm: defaultAlgorithm,
        encoding: defaultEncoding,
      },
      options
    );

    if (
      !(typeof secret === 'string' || secret instanceof Buffer) ||
      secret.length === 0
    ) {
      throw new Error('Cryptr: secret must be a non empty string or Buffer');
    }

    this.secret = secret;
  }

  getKey(salt: BinaryLike): CipherKey {
    return crypto.pbkdf2Sync(this.secret, salt, 100000, 32, 'sha512');
  }

  encrypt(value: string | Buffer) {
    if (value === undefined || value === null) {
      throw new Error('Cryptr: value must not be null or undefined');
    }

    const iv = crypto.randomBytes(ivLength);
    const salt = crypto.randomBytes(saltLength);
    const key = this.getKey(salt);
    const cipher = crypto.createCipheriv(this.options.algorithm, key, iv);
    const encrypted = Buffer.concat([
      cipher.update(String(value), 'utf8'),
      cipher.final(),
    ]);
    const tag = cipher.getAuthTag();
    const result = Buffer.concat([salt, iv, tag, encrypted]);

    if (this.options.encoding) {
      return result.toString(this.options.encoding);
    }

    return result;
  }

  decrypt(value: string | Buffer) {
    if (value === undefined || value === null) {
      throw new Error('value must not be null or undefined');
    }

    const stringValue = this.options.encoding
      ? Buffer.from(String(value), this.options.encoding)
      : value;
    const salt = stringValue.slice(0, saltLength);
    const iv = stringValue.slice(saltLength, tagPosition);
    const tag = stringValue.slice(tagPosition, encryptedPosition);
    const encrypted = stringValue.slice(encryptedPosition);
    const key = this.getKey(salt);
    const decipher = crypto.createDecipheriv(this.options.algorithm, key, iv);

    decipher.setAuthTag(Buffer.from(tag));

    return decipher.update(Buffer.from(encrypted)) + decipher.final('utf8');
  }
}
