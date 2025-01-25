//grouping test ,means grouping the test cases which are related to each other. In this case we are testing the Greet component and we have written two test cases for it. We can group these test cases using describe function.
//describe function takes two arguments, first argument is the name of the group and second argument is the function which contains the test cases. 
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

// describe('Greet', () => {

//     test('test', () => {
//         render(<Greet />)
//         const greetElement = screen.getByText('Hello')
//         expect(greetElement).toBeInTheDocument()
//     })
//     describe('greet nested', () => {
//         test('render with name', () => {
//             render(<Greet name='Asif' />)
//             const greetElement = screen.getByText(/Hello Asif/i)
//             expect(greetElement).toBeInTheDocument()
//         })
//     })
// })


//to check branch coverage thrashold works or not
test('Greet test', () => {
    render(<Greet />)
    const greetElement = screen.getByText(/Hello/i)
    expect(greetElement).toBeInTheDocument()
})


// --collectCoverageFrom='!src/Tests/component/**/*.{type,test}.{js,jsx}  //this command is used to ignore the files which are not needed to be tested.
// --collectCoverageFrom='src/Tests/component/**/*.{type,test}.{js,jsx}  //this command is used to test the files which are needed to be tested.


//coverage thrashond is a predifine minimum percentage of code coverage that your test must achieve 
// jest{
//     coverageThreshold{
//         global:{
//           statements:-10,
//           branches:80,
//           functions:80,
//           lines:80}
// }