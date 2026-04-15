# Bug Report

**Title:** `generateStrongPassword` can return unsafe/weak passwords

**Description:**
`generateStrongPassword()` generates passwords randomly but does not verify the result meets the strength requirements. Due to randomness, it is possible to generate a password that lacks an uppercase letter, lowercase letter, digit, or special character — causing it to fail `isStrongPassword()`.

**Steps to reproduce:**
1. Call `generateStrongPassword(12)` multiple times
2. Pass each result to `isStrongPassword()`
3. Observe that some results return `false`

**Expected behavior:**
`generateStrongPassword()` should always return a password that passes `isStrongPassword()`.

**Actual behavior:**
`generateStrongPassword()` can return a password that fails `isStrongPassword()`.

**Fix:**
Added a `while (!isStrongPassword(strongPassword))` loop to regenerate the password until it passes the strength check.
