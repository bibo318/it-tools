import { describe, expect, it } from 'vitest';
import { generateNumeronym } from './numeronym-generator.service';

describe('numeronym-generator service', () => {
  describe('generateNumeronym', () => {
    it('chữ số của một từ là chữ cái đầu tiên, số chữ cái giữa chữ cái đầu tiên và chữ cái cuối cùng và chữ cái cuối cùng', () => {
      expect(generateNumeronym('internationalization')).toBe('i18n');
      expect(generateNumeronym('accessibility')).toBe('a11y');
      expect(generateNumeronym('localization')).toBe('l10n');
    });
    it('chữ số của một từ có 3 chữ cái chính là từ đó', () => {
      expect(generateNumeronym('abc')).toBe('abc');
    });
  });
});
