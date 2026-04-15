const { generateStrongPassword, isStrongPassword } = require('./index');

test('generated password has the correct length', () => {
    const password = generateStrongPassword(12);
    expect(password.length).toBe(12);
});

test('weak password returns false', () => {
    const result = isStrongPassword('abc');
    expect(result).toBe(false);
});

test('generateStrongPassword always returns a strong password', () => {
    const password = generateStrongPassword(12);
    expect(isStrongPassword(password)).toBe(true);
});
