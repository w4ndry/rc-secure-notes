import {
  storage,
  save,
  remove,
  loadString,
  loadBoolean,
  loadNumber,
} from '../index';

describe('FastStorage Init', () => {
  it('should be an instance of MMKV', () => {
    expect(storage.constructor.name).toBe('MMKV');
  });
});

describe('Test Storage', () => {
  describe('save', () => {
    it('should save and load a string value', () => {
      save('testString', 'hello');
      expect(loadString('testString')).toBe('hello');
      remove('testString');
    });

    it('should save and load a number value', () => {
      save('testNumber', 123);
      expect(loadNumber('testNumber')).toBe(123);
      remove('testNumber');
    });

    it('should save and load a boolean value', () => {
      save('testBoolean', true);
      expect(loadBoolean('testBoolean')).toBe(true);
      remove('testBoolean');
    });
  });

  describe('remove', () => {
    it('should remove key from fast storage', () => {
      save('testNumber', 'bro');
      remove('testNumber');
      expect(loadString('testNumber')).toBe(undefined);
    });
  });
});
