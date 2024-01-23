import { describe, expect, it } from 'vitest';
import { getStringSizeInBytes } from './text-statistics.service';

describe('text-statistics', () => {
  describe('getStringSizeInBytes', () => {
    it('sẽ trả về kích thước của một chuỗi tính bằng byte', () => {
      expect(getStringSizeInBytes('')).toEqual(0);
      expect(getStringSizeInBytes('a')).toEqual(1);
      expect(getStringSizeInBytes('aa')).toEqual(2);
      expect(getStringSizeInBytes('😀')).toEqual(4);
      expect(getStringSizeInBytes('aaaaaaaaaa')).toEqual(10);
    });
  });
});
