## Description

Implements `isStrongPassword()` and `generateStrongPassword()`. Fixed `generateStrongPassword()` to guarantee it always returns a strong password by retrying until `isStrongPassword()` passes. Added a Jest unit test to verify this behavior.

## Related Issue

Fixes: `generateStrongPassword` can return unsafe/weak passwords

## Type of Change

<!-- Mark with an x all the checkboxes that apply (like [x]). -->

- [x] Bug fix
- [ ] New feature
- [ ] Refactoring (no functional changes, no API changes)
- [ ] Documentation update
- [ ] Other (please describe):

## Proposed Changes

1. Changed `const strongPassword` to `let` to allow reassignment
2. Added `while (!isStrongPassword(strongPassword))` loop to retry generation until the password is strong
3. Added Jest unit test to verify `generateStrongPassword` always returns a strong password

## How Has This Been Tested?

- [x] Unit Tests
- [ ] Integration Tests
- [ ] Manual Testing

**Test Configuration**:
- Node.js Version:
- NPM/Yarn Version:
- Operating System:

## Checklist

- [ ] I have read the [contribution guidelines](../CONTRIBUTING.md).
- [ ] My code follows the style of this project.
- [ ] I have added tests to cover my changes.
- [ ] All new and existing tests passed.
- [ ] I have updated the documentation as needed (inline code comments / README / any other relevant documentation).

## Additional Comments

<!--
Add any other context or screenshots about the pull request here.
-->
