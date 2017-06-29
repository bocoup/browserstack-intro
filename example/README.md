# Example Usage

Getting Started:

```shell
npm install
```

Set `BS_USERNAME` & `BS_KEY` environment variables to your BrowserStack automate credentials available at https://www.browserstack.com/accounts/settings

Run tests with `npm run test:integration`, `npm run test:unit`, or both with `npm test`

You can pass the environment variables at runtime if you prefer:

`BS_USERNAME=user BS_KEY=key npm test`

# Tests
The unit tests are run with the Karma test runner which is configured to use BrowserStack. The Mocha test framework is used for both unit and integration tests.

## Unit
The "application" code is deliberatly sparse because of the complexity that can exist when integrating existing tools with a testing workflow. Rather than dig into all of those possible options this application only has one method that it adds into global scope. That method is called `isOdd` and it returns a boolean when passed an integer.

## Integration
The integration tests use the BC.edu website and demonstrate browser automation features like clicking, screen shooting, and resizing.