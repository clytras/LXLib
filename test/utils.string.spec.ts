import { normalizeGreek } from '../src/utils/string';

describe('utils/string', () =>{
  it('should normalize greek', () => {
    const testStrings: [string, string][] = [
      ['Δοκιμή', 'Δοκιμη'],
      ['Αλφαριθμητικό', 'Αλφαριθμητικο'],
      ['Απελπισία', 'Απελπισια'],
      ['Τσαρούχια', 'Τσαρουχια'],
      ['ΠΟΔΌΣΦΑΙΡΟ', 'ΠΟΔΟΣΦΑΙΡΟ'],
      ['ΚΑΛΆΘΙ', 'ΚΑΛΑΘΙ'],
      ['ΦΑΚΈΣ', 'ΦΑΚΕΣ'],
      ['ΆΈΉΊΌΎΏάέήίόύώ', 'ΑΕΗΙΟΥΩαεηιουω'],
    ];

    testStrings.forEach(([marked, unmarked]) => {
      expect(normalizeGreek(marked)).toBe(unmarked);
    });
  });
});
