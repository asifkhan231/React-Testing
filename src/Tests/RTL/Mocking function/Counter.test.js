import { render,screen } from '@testing-library/react'
import Counter from './Counter'
import user from '@testing-library/user-event'

describe('Counter functions', () => {
    test('render correctly',async () => {
        user.setup()
        const increment = jest.fn()
        const decrement = jest.fn()

        render(<Counter
            count={0}
            increment = {increment}
            decrement = {decrement}
        />)

        const incrementButton = screen.getByRole('button',{name:'Increment'})
        const decrementButton = screen.getByRole('button',{name:'Decrement'})

        await user.click(incrementButton)
        await user.click(decrementButton)

        expect(increment).toHaveBeenCalledTimes(1)
        expect(decrement).toHaveBeenCalledTimes(1)
    })
})

// jest.fn---------->
// here we just create two mock function to test their availability and calling times

