import { render, screen } from "@testing-library/react";
import Application from "./Application.js";
import Skills from "./skills.js";


describe('Application', () => {
    test('GetBy query tests', () => {
        render(<Application />);
        // const nameElement = screen.getByRole('textbox');
        // expect(nameElement).toBeInTheDocument();

        // const headingElement = screen.getByRole('heading', { level: 1 });
        // expect(headingElement).toBeInTheDocument();

        // const thirdHeadingElement = screen.getByRole('heading', { level: 2 });
        // expect(thirdHeadingElement).toBeInTheDocument();
        const nameElement = screen.getByRole('textbox', { name: 'Name', });
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', { name: 'Bio', });
        expect(bioElement).toBeInTheDocument();

        const comboBoxElement = screen.getByRole('combobox');
        expect(comboBoxElement).toBeInTheDocument();

        const checkboxElement = screen.getByRole('checkbox');
        expect(checkboxElement).toBeInTheDocument();

        // const submitButton = screen.getByRole('button')
        // expect(submitButton).toBeInTheDocument()



        //getByLabelText

        // const inpLabel = screen.getByLabelText('Name')
        // expect(inpLabel).toBeInTheDocument()

        const labelElem = screen.getByLabelText('agreed on the conddition')
        expect(labelElem).toBeInTheDocument()

        //now if two elements having same label text then we use selector option to seprate 
        const labelElem2 = screen.getByLabelText('Name', {
            selector: 'input'
        })
        expect(labelElem2).toBeInTheDocument()


        //getByPlaceholderText

        const placeholderELem = screen.getByPlaceholderText('name')
        expect(placeholderELem).toBeInTheDocument()

        //getByDisplayValue

        const elemByValue = screen.getByDisplayValue('Asif')
        expect(elemByValue).toBeInTheDocument()

        //getByTitle

        const elementByTitle = screen.getByTitle('title')
        expect(elementByTitle).toBeInTheDocument()

        //getByTestId

        const elementByTestId = screen.getByTestId('custom-element')
        expect(elementByTestId).toBeInTheDocument()
    })
})

// ------------->GetByRole------------------->

// getByRole is used to get the element by its role.role is the attribute of the element which is used to identify the element.like role='textbox' for input ,role='combobox' for select tag,role='checkbox' for checkbox tag etc.
// getByRole also have the second argument which is used to pass the options like {name:'name'} to get the element by its name attribute.
// why we need this
// when we have to element with same role test will fail .so we can use the second argument to get the element by its name attribute.
// in this name we can use label name , text , or arai-label etc. which are the accessible name

// now when our project is having multiple headings and we have to get the element by its heading level then we can use the getByRole with the second argument as {level:1} to get the element by its heading level.
// like we can use the {level:2} to get the second heading level h2.
// another some options are:
// name
// level
// hidden
// checked
// pressed
// selected etc..


// ------------->GetByLabelText------------------->

// getByLabelText is used to get the element by its label text. This is useful for form elements where the label is associated with the input element or any other element.
// It queries the DOM for elements that are labeled by a label element with the specified text content.



// ------------->getByPlaceholdertext------------------->

// getByPlaceholderText is used to get the element by its placeholder text. This is useful for input elements where the placeholder attribute is used to provide a hint to the user about what to enter in the input field.


// ------------->getByDisplayValue------------------->

// getByDisplayValue is used to get the element by its current value. This is useful for form elements where the value attribute is used to provide the current value of the input field.eg:
// input value
// texyarea value
// select value

// ------------->GetByText------------------->

// getByText is used to get the element by its text content. This is useful for elements that have text content, such as paragraphs, headings, buttons, etc.

// ------------->GetByAltText------------------->

// getByAltText is used to get the element by its alt text. This is useful for image elements where the alt attribute is used to provide alternative text for the image.

// ------------->GetByTitle------------------->

// getByTitle is used to get the element by its title attribute. This is useful for elements that have a title attribute, which is often used to provide additional information about the element.


// ------------->GetByTestId------------------->

// getByTestId is used to get the element by its data-testid attribute. This is useful for elements that have a data-testid attribute, which is often used to provide a unique identifier for the element in tests.


describe('multiple element', () => {
    const listArr = ['joen', 'mark', 'happy', 'Asif']
    test('render succesfully', () => {
        render(<Skills list={listArr} />)

        const listElements = screen.getAllByRole('listitem')
        expect(listElements).toHaveLength(listArr.length)
    })

    test('textMatchers', () => {
        render(<Skills list={listArr} />)
        // Exact match (default)
        const exactMatchElement = screen.getByText('Submit');
        expect(exactMatchElement).toBeInTheDocument();

        // Partial match
        const partialMatchElement = screen.getByText((content, element) => content.startsWith('Sub'));
        expect(partialMatchElement).toBeInTheDocument();

        // Regex match
        const regexMatchElement = screen.getByText(/submit/i);
        expect(regexMatchElement).toBeInTheDocument();

        // Function match
        const functionMatchElement = screen.getByText((content, element) => content === 'Submit');
        expect(functionMatchElement).toBeInTheDocument();
    })

})


//GetAllByRole
// getAllByRole is used to get all elements by their role. It returns an array of elements that match the specified role.
// This is useful when you want to assert the presence of multiple elements with the same role.

// we can use all these methods to get multiple element using getByAll Prefix eg;
// geAlltByRole
// geAlltByLabelText
// geAlltByText
// ggeAlltByTestId
// getAllByDisplayValue
// getAllByPlaceholderText
// getAllByTitle

// ------------->Text Matcher------------------->

// Text matchers are used to match the text content of elements. They can be used with various query methods like getByText, getByLabelText, etc.
// There are different types of text matchers:
// 1. Exact match (default): Matches the text exactly.
// 2. Partial match: Matches a part of the text.
// 3. Regex match: Matches the text using a regular expression.
// 4. Function match: Matches the text using a custom function.

// Example usage:

// ------------->QueryBy and QueryAllBy------------------->

// queryBy methods are similar to getBy methods, but they return null if no matching element is found instead of throwing an error. This is useful when you want to assert that an element is not present in the DOM.
// If a component conditionally renders elements based on state or props, queryBy helps ensure the element is hidden or absent when expected.

describe('queryBy methods', () => {
    const listArr = ['joen', 'mark', 'happy', 'Asif']
    test('login button render', () => {
        render(<Skills list={listArr} />);
        const loggiButtonElem = screen.getByRole('button', {
            name: "Login",
        })
        expect(loggiButtonElem).toBeInTheDocument();
    });

    test('learn skills but not render', () => {
        render(<Skills list={listArr} />);
        const loggiButtonElem = screen.queryByRole('button', {
            name: "Learn Skills",
        })
        expect(loggiButtonElem).not.toBeInTheDocument();
    })

});

// queryAllBy methods are similar to getAllBy methods, but they return an empty array if no matching elements are found instead of throwing an error. This is useful when you want to assert that no elements are present in the DOM.


// ------------->FindBy and FindAllBy------------------->

// findBy methods are similar to getBy methods, but they return a promise that resolves when the element is found.
//  This is useful for asynchronous operations where the element may not be immediately available in the DOM.but may appears after some time.
//promise will be rejected if no element found.
//it waits till a 1000ms to find the element if the the element didn't appears in this period it rejects the promise.
//we can give custome timeout period to find element , by adding time as option 

describe('findBy methods', () => {
    test('learn skills button display after some time.', async () => {
        render(<Application />);
        const submitButton = await screen.findByRole('button', {
            name: 'Learn Skills',
        },
            { timeout: 2000 }
        );

        expect(submitButton).toBeInTheDocument();
    });


});

// findAllBy methods are similar to getAllBy methods, but they return a promise that resolves when all matching elements are found. This is useful for asynchronous operations where the elements may not be immediately available in the DOM.


//change file name from .t to .test