# Task:

### Link: https://drive.google.com/file/d/1fyM6vJOCyL2WUsPJkQP3Po8QMI9W9YMO/view?usp=sharing

# How to run:

1. Clone the repository
2. Run `pnpm i`
3. Make sure that you have valid `.env` file in the root of the project
4. Run `pnpm test`

# Briefly about structure:

- .github: contains actions for CI/CD (for now it is super simple, but it can be improved)
- .husky: pre-commit hooks for linting and formatting
- constants: All that we can reuse between different tests. It can be some texts, values, requests, etc...
- fixtures: For now this folder contain smart initialization for PO, but it can be used for other purposes as well
- pageObject: This folder contain PO, locators initialization, and types. All that need to make the test
- tests: just tests
- types: global types that we can use everywhere in the app

# Notes

- This structure can be increased with additional modules, such as helper / components / etc...
- I added only chrome for check results much faster, but my solution works for Firefox/Safari as well 
