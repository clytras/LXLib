export function toFormData(
  obj: Record<string, any>,
  form: FormData,
  namespace: string
): FormData {
  const fd = form || new FormData();
  let formKey;

  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = `${namespace}[${property}]`;
      } else {
        formKey = property;
      }

      // if the property is an object, but not a File, use recursivity.
      if (obj[property] instanceof Date) {
        fd.append(formKey, obj[property].toISOString());
      } else if (
        typeof obj[property] === 'object' &&
        !(obj[property] instanceof File) &&
        obj[property] !== null
      ) {
        toFormData(obj[property], fd, formKey);
      } else {
        // if it's a string or a File object
        fd.append(formKey, obj[property]);
      }
    }
  }

  return fd;
}

export function fetchTimeout(
  url: string,
  options?: RequestInit | undefined,
  timeout = 30000
): void {
  Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), timeout)
    ),
  ]);
}

export function disableConsole(
  condition: boolean,
  functions = [
    'log',
    'debug',
    'error',
    'warn',
    'clear',
    'dir',
    'table',
    'trace',
    'time',
  ]
): void {
  if (condition) {
    for (const fn of functions) {
      // @ts-ignore
      if (console[fn]) {
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        console[fn] = (): void => {};
      }
    }
  }
}
