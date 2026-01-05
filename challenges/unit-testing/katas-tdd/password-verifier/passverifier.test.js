const verify = require('./script');  
test('password should be rejected if it is less than 8 characters', () => {
  expect(verify('short')).toBe('Password rejected');
});

test('password should be rejected if it is null', () => {
  expect(verify(null)).toBe('Password rejected');
});

test('password should be rejected if it has no uppercase letter', () => {
  expect(verify('password1')).toBe('Password rejected');  
});

test('password should be rejected if it has no number', () => {
  expect(verify('Password')).toBe('Password rejected');
});

test('password should be accepted if it has at least 8 characters, 1 uppercase letter, and 1 number', () => {
  expect(verify('Password1')).toBe('Password accepted');
});
