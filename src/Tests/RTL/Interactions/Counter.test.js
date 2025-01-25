import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event'
import Counter from "./Counter";

describe("user's point interaction (mouse)", () => {

    test('button render', () => {
        render(<Counter />)
        const countHeading = screen.getByRole('heading', { level: 2 })
        expect(countHeading).toHaveTextContent('0')
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        expect(incrementButton).toBeInTheDocument()
    })

    test('onClick changing count value to 1', async () => {
        user.setup()//created an instence for user event 
        render(<Counter />)
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        await user.click(incrementButton)
        const countHeading = screen.getByRole('heading', { level: 2 })
        expect(countHeading).toHaveTextContent('1')
    })

    test('onClick changing count value to 2', async () => {
        user.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        await user.click(incrementButton)
        await user.click(incrementButton)
        const countHeading = screen.getByRole('heading', { level: 2 })
        expect(countHeading).toHaveTextContent('2')
    })
})

//to test user interaction in web application we need "testing-library/user-event" dependancy which is create-react-app automatically installs in system.
// it returns a promise so we use asynnc and await , we have multiple events in user object from "testing-library/user-event" eg:
// user.click for  onClick event on any button or else
// similarly their are some other events are available

// user-event----------->

// A companion library for Testing Library that simulates user interactions by dispatching the events that would happen if the interaction took place in a browser.
// It is the recommended way to test user interactions with RTL.

// fireEvent vs user-event-------------->

// fireEvent is a method from RTL which is used to dispatch DOM events

// user-event simulates full interactions, which may fire multiple events and do additional checks along the way

// For example, we can dispatch the change event on an input field using fireEvent
// When a user types into a text box, the element has to be focused, and then keyboard and input  events are fired and the selection and value on the element are manipulated as they type

// user-event allows you to describe a user interaction instead of a concrete event. It adds visibility and intractability checks along the way and manipulates the DOM just like a user interaction in the browser would. It factors in that the browser e.g. wouldn't let a user click a hidden element or type in a disabled text box

// Pointer Interaction---------------->
// pointer Interaction are mouse events , and there are two api's that fullfill this:
// convenience API's------>
// click()
// dblClick()
// tripleClick()
// hover()
// unhover()

// Pointer APIs'------->

// pointer({ keys: '[MouseLeft]', target: element })
// pointer({ keys: '[MouseRight]', target: element })
// pointer({ keys: '[MouseMiddle]', target: element })
// pointer({ keys: '[MouseLeft][MouseLeft]', target: element })
// pointer('[MouseLeft>]')
// Pointer('[/MouseLeft')


describe("user's point interaction (keyboard)", () => {


    test('onClick changing count value to input amount 10', async () => {
        user.setup()
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, '10')//here we test user input value
        expect(amountInput).toHaveValue(10)
        const setButton = screen.getByRole('button', { name: 'Set' })
        await user.click(setButton)
        const countHeading = screen.getByRole('heading', { level: 2 })
        expect(countHeading).toHaveTextContent('10')
    })

    test('elements are focused in right order', async () => {
        user.setup()
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        const setButton = screen.getByRole('button', { name: 'Set' })
        await user.tab()
        expect(incrementButton).toHaveFocus()
        await user.tab()
        expect(amountInput).toHaveFocus()
        await user.tab()
        expect(setButton).toHaveFocus()
    })
})

// there are some 
// keyboard apis
//utility apis
//clipboard apis

//keyboard APIs
// utility APIs
// eg: clear()
//type(element,value)
// selectoption(element,option)
//deselectOption(element,option)
// upload(element,file)


// clipboard APIs
//eg: copy()
//cut()
//paste()

