/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */
import convertBytesToHuman from './convertBytesToHuman.js'

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman('string')).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toEqual('0.00 Byte')
  expect(convertBytesToHuman(10000000000)).toEqual('9.31 GB')
  expect(convertBytesToHuman(5)).toEqual('5.00 Byte')
  expect(convertBytesToHuman(5000)).toEqual('4.88 KB')
  expect(convertBytesToHuman(5000000)).toEqual('4.77 MB')
});

// другая группа проверок
