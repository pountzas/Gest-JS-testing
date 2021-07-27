const functions = require('./functions');
const stringLength = require('./string');

test('Adds 2 + 2 to equel 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 not to equel 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('shoud be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('shoud be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test('User sould be brad smith', () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: 'Brad',
    lastName: 'Smith'
  });
});


test('sould be empty string', () => {
  expect(stringLength('')).toBe(0);
});

test('string sould be at least 1 character', () => {
  expect(stringLength('a')).toBe(1);
});