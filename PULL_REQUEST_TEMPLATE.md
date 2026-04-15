# Pull Request

**What does this PR do?**
Implements `isStrongPassword()` and `generateStrongPassword()`. Fixed `generateStrongPassword()` to guarantee it always returns a strong password by retrying until `isStrongPassword()` passes. Added a Jest unit test to verify this behavior.

**Related issue:**
Fixes: `generateStrongPassword` can return unsafe/weak passwords

**Changes:**
- Changed `const strongPassword` to `let` to allow reassignment
- Added `while (!isStrongPassword(strongPassword))` loop to retry generation until the password is strong
- Added Jest unit test to verify `generateStrongPassword` always returns a strong password

**Checklist:**
- [ ] I tested my changes with `npm test`
- [ ] All tests pass
- [ ] I kept the changes small and focused
