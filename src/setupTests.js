
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// // vitest.setup.js
import { server } from './Tests/RTL/Mocking HTTP Request/Mocks/server'
 
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


// It  imports the server object from a local module located at ./src/mocks/node. This server is likely an instance of a mock server created using a library like msw (Mock Service Worker).
// The beforeAll hook runs once before all tests in the suite. Here, it starts the mock server by calling server.listen(), ensuring that the server is ready to intercept network requests before any tests run.
// The afterEach hook runs after each individual test. It resets any request handlers that were added during the tests by calling server.resetHandlers(). This ensures that each test runs with a clean slate and does not interfere with others.
// The afterAll hook runs once after all tests in the suite have completed. It stops the mock server by calling server.close(), cleaning up any resources used by the server.
// This setup ensures that your tests have a consistent and isolated environment, making them more reliable and easier to debug.

