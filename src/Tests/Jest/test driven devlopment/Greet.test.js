// // test driven development is process of writing test cases before writing the actual code. In this case we are writing test cases before writing the actual code of Greet component.
// // In this test case we are checking if the Greet component is rendering the text "Hello" or not.
// //it is also known as red-green process because in this process we first write the test case and run it, it will fail because we have not written the actual code yet, then we write the actual code and run the test case again, it will pass this time.
// //In this way we can make sure that our code is working as expected and we have not missed any test case.

// //there are 3 steps in test driven development
// //1. Write a failing test case
// //2. Write the actual code
// //3. refactor the code , refactor means to improve the code without changing the functionality of the code.

// import { cleanup } from '@testing-library/react';
// import { render, screen } from "@testing-library/react";
// import Greet from "./Greet";

// test('Greet test', () => {
//     render(<Greet />)
//     const greetElement = screen.getByText(/hello/i)
//     expect(greetElement).toBeInTheDocument()
// })

// test('Greet render with name', () => {
//     render(<Greet name='Asif'/>)
//     const greetElement = screen.getByText('Hello Asif')
//     expect(greetElement).toBeInTheDocument()
// })

// afterEach(() => {
//     cleanup();
// });

//when want to check this test file then change file name from Greet-test.js to Greet.test.js