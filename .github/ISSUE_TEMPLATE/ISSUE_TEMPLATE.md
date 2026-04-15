---
name: "Bug Issue"
about: "Submit a bug report"
title: ""
labels: "bug"
assignees: ""
---

## Description

`generateStrongPassword()` generates passwords randomly but does not verify the result meets the strength requirements. Due to randomness, it is possible to generate a password that lacks an uppercase letter, lowercase letter, digit, or special character — causing it to fail `isStrongPassword()`.

## Steps to Reproduce (for bugs)

1. Call `generateStrongPassword(12)` multiple times
2. Pass each result to `isStrongPassword()`
3. Observe that some results return `false`

## Expected Behavior (for bugs)

`generateStrongPassword()` should always return a password that passes `isStrongPassword()`.

## Actual Behavior (for bugs)

`generateStrongPassword()` can return a password that fails `isStrongPassword()`.

## Proposed Solution or Feature Request

Added a `while (!isStrongPassword(strongPassword))` loop to regenerate the password until it passes the strength check.

## Additional Context

A Jest unit test was added to verify that `generateStrongPassword` always returns a strong password.

## Environment

- **Package Version**: 1.0.0
- **Node.js Version**:
- **Browser (if applicable)**: N/A
- **Operating System**:
- **Additional Details**:
