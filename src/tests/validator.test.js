import Validator from '../js/class/Validator.js';

test('Успешно', () => {
  const validator = new Validator();
  const received = validator.validateUsername('AbcdF_efg-Hi123Jk');
  expect(received).toBe(true);
});

test('Ошибка (в начале число)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('5AbcdF_efg-Hi123Jk');
  expect(received).toBe(false);
});

test('Ошибка (в конце число)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('AbcdF_efg-Hi123Jk5');
  expect(received).toBe(false);
});

test('Ошибка (более 3-х цифр)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('AbcdF_efg-Hi1235Jk');
  expect(received).toBe(false);
});

test('Ошибка (в начале -)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('-AbcdF_efg-Hi123Jk');
  expect(received).toBe(false);
});

test('Ошибка (в конце -)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('AbcdF_efg-Hi123Jk-');
  expect(received).toBe(false);
});

test('Ошибка (в начале _)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('_AbcdF_efg-Hi123Jk');
  expect(received).toBe(false);
});

test('Ошибка (в конце _)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('AbcdF_efg-Hi123Jk_');
  expect(received).toBe(false);
});

test('Ошибка (русские буквы)', () => {
  const validator = new Validator();
  const received = validator.validateUsername('абвгд_efg-Hi123Jk');
  expect(received).toBe(false);
});
