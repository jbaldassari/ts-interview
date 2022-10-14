# ts-interview

Simple project to use for technical interviews in TypeScript. Just clone the repo, open in your IDE of choice, and use
Jest to execute.

# Requirements

Node/npm are required. See [.nvmrc](.nvmrc) for recommended node version. It is recommended to use
[Node Version Manager](https://github.com/nvm-sh/nvm) with
[shell integration](https://github.com/nvm-sh/nvm#deeper-shell-integration) if possible.

# Usage

1. Clone this repo locally
1. Run `npm ci` to install dependencies
1. Edit [src/interview.ts](src/interview.ts) in your IDE of choice, or create a new file under [src](src/)
1. Edit [src/interview.test.ts](src/interview.test.ts) to implement unit tests
1. In a terminal run `npm test` which will automatically re-run unit tests as your source files change
1. In a terminal run `npm run test:coverage` which will run all unit tests and calculate/report test coverage
