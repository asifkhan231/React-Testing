import { act, renderHook } from '@testing-library/react'
import useCounter from './useCounter'

describe('Custom Hook useCounter', () => {

    test('should renders initial count', () => {
        const { result } = renderHook(useCounter)
        expect(result.current.count).toBe(0)
    })

    test('should accept and renders given initial count ', () => {
        const { result } = renderHook(useCounter, {
            initialProps: {
                initialValue: 20
            }
        })
        expect(result.current.count).toBe(20)
    })

    test('should incement count ', () => {
        const { result } = renderHook(useCounter)
        act(() => {
            result.current.increment()
        })
        expect(result.current.count).toBe(1)
    })

    test('should decrement count ', () => {
        const { result } = renderHook(useCounter,{
            initialProps:{
                initialValue:1
            }
        })
        act(() => {
            result.current.decrement()
        })
        expect(result.current.count).toBe(0)
    })
})


// act()----------------->
// When writing UI tests, tasks like rendering, user events, or data fetching can be considered as “units” of interaction with a user interface. React provides a helper called act() that makes sure all updates related to these “units” have been processed and applied to the DOM before you make any assertions.

//renderHook------------->
// The renderHook function is used to test custom hooks in isolation. 
// It allows you to render a hook and interact with its return values and state updates.