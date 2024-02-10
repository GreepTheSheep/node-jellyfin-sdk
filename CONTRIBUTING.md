# Contributing

Thanks for being part of the code!

## Directory layout

```css
+---.github
¦   +---workflows /* CI & automations for PR and releases */
+---.vscode /* VSCode Debug and tasks file */
+---node_modules /* Node.js modules, for npm i */
+---src
¦   +---client
¦   +---rest /* HTTP Requests */
¦   +---structures
¦   +---util /* Client options and private constructor strings */
+---typings /* TypeScript auto-generated typings for VSCode and other IDE using TS */
+---test /* Mocha tests (coming later) */
```

## Pull Requests

Before opening a PR, run `npm test` to do a eslint scan then run mocha tests

Before commiting, **be sure that no files from the `typings/` directory is commited!** GitHub Actions will build it automatically after pushing

When opening a PR, please open it to the 'develop' branch. Thanks!

## Issues

All issues are appreciated, it can be suggestions, bug fixes.

## Discussion

If you want to talk about this project or just for saying hi, Join the [Greep's Discord Server](https://greep.fr/#/discord).
