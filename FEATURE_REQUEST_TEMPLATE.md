# Feature Request

**Title:**
Guarantee that `generateStrongPassword` always returns a strong password

**Is your feature request related to a problem? Please describe:**
`generateStrongPassword()` generates passwords randomly, but due to the nature of randomness it can produce passwords that fail `isStrongPassword()` — missing an uppercase letter, lowercase letter, digit, or special character. This means callers cannot rely on the output being safe without checking it themselves.

**Describe the solution you'd like:**
`generateStrongPassword()` should internally validate its own output using `isStrongPassword()` and retry generation until the result passes. The caller should always receive a guaranteed strong password without any extra checks.

**Describe alternatives you've considered:**
- Letting the caller check the result with `isStrongPassword()` and retry manually — but this puts the burden on every consumer of the function.
- Building the password by construction (ensuring each character type is included) — this works but is more complex to implement correctly.

**Additional context:**
The fix implemented adds a `while (!isStrongPassword(strongPassword))` retry loop inside `generateStrongPassword()`. A Jest unit test was added to verify the guarantee holds.
