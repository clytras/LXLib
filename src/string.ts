export function normalizeGreek(text: string) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function camelize(str: string, lowerFirstChar = false) {
  return (str || '')
    .replace(/[_-]/g, ' ')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
      return lowerFirstChar && index === 0
        ? letter.toLowerCase()
        : letter.toUpperCase();
    })
    .replace(/\s+/g, '');
}

export function toTitleCase(
  str: string,
  splitWith: RegExp | string = /[\s]+/,
  joinWith = ' '
) {
  return str
    .toLowerCase()
    .split(splitWith)
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(joinWith);
}

export function toSentence(str: string) {
  const result = str.replace(/[_-\s]+/g, ' ');
  return result[0].toUpperCase() + result.substring(1).toLowerCase();
}

interface MakeLinesParams {
  lines: string[];
  [key: string]: any;
}
interface MakeLinesOptions {
  glue?: string;
  [key: string]: any;
}
export function makeLines(
  { lines }: MakeLinesParams,
  { glue = '\n' }: MakeLinesOptions = {}
) {
  return lines.filter((l) => l || l === '').join(glue);
}

export function nl2br(str: string, is_xhtml = true) {
  return str.replace(/\n/g, is_xhtml ? '<br/>' : '<br>');
}

export function removeAllWhitespaces(text: string, whitespaces = /[ \t\r]+/g) {
  return text.replace(whitespaces, '');
}

export function decodeHtmlCharCodes(str: string) {
  return str.replace(/(&#(\d+);)/g, (_match, _capture, charCode) =>
    String.fromCharCode(charCode)
  );
}

export function toJsonIntended(obj: any, spaces = 2) {
  return JSON.stringify(obj, null, spaces);
}

export function format(text: string, ...params: any): string {
  let formatted = text;
  let args: any;

  if (params.length === 1 && typeof params[0] === 'object') {
    args = params[0];
  } else {
    args = params;
  }

  const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  formatted = formatted.replace(/\{([^}]+)\}/g, (_, key) => {
    const value = getNestedValue(args, key);
    return value !== undefined ? value : `{${key}}`;
  });

  return formatted;
}

export const translateBool = (str: string) =>
  /^\s*(true|yes|on)\s*$/i.test(str);

export const quoteSingle = (str: string) => `'${str}'`;
export const quoteDouble = (str: string) => `"${str}"`;
export const quoteBacktick = (str: string) => `\`${str}\``;
export const quoteLRSingle = (str: string) => `‘${str}’`;
export const quoteLRDouble = (str: string) => `“${str}”`;

/**
 * @param {string} str - The string to be quoted
 * @param {('single'|'double'|'backtick'|'lrsingle'|'lrdouble')} type - The type of the quotes to be used
 */
type QuoteType = 'single' | 'double' | 'backtick' | 'lrsingle' | 'lrdouble';
export function quote(str: string, type: QuoteType) {
  switch (type) {
    case 'single':
      return quoteSingle(str);
    case 'double':
      return quoteDouble(str);
    case 'backtick':
      return quoteBacktick(str);
    case 'lrsingle':
      return quoteLRSingle(str);
    case 'lrdouble':
      return quoteLRDouble(str);
    default:
      return str;
  }
}

export const quoteIf = (str: string, type: QuoteType) =>
  str ? quote(str, type) : str;

/**
 * Convert number to alphabet string
 * https://stackoverflow.com/a/45789255/1889685
 */
export function numToSSColumn(num: number) {
  let s = '';
  let t: number;

  while (num > 0) {
    t = (num - 1) % 26;
    s = String.fromCharCode(65 + t) + s;
    num = ((num - t) / 26) | 0;
  }
  return s || undefined;
}

export function uniqueChars(str: string) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) < 0) {
      result += str[i];
    }
  }

  return result;
}

export function removeRepeatedChars(str: string, chars: string | null = null) {
  let result = '';
  let prev = '';
  let rmPrev = false;

  for (let i = 0; i < str.length; i++) {
    if (prev === str[i]) {
      if (!rmPrev) {
        result += str[i];
      }
      prev = str[i];
      continue;
    }

    if (chars) {
      rmPrev = chars.indexOf(str[i]) >= 0;
    } else {
      rmPrev = true;
    }

    result += str[i];
    prev = str[i];
  }

  return result;
}

export function applyBackspaceChar(str: string) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '\b') {
      if (result.length > 0) {
        result = result.slice(0, -1);
      }
    } else {
      result += str[i];
    }
  }

  return result;
}
