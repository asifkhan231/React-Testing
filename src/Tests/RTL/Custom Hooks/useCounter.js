import React, { useState } from 'react'

function useCounter({ initialValue = 0 } = {}) {
    const [count, setCount] = useState(initialValue)
    const increment = () => setCount(pre => pre + 1)
    const decrement = () => setCount(pre => pre - 1)
    return ({ count, increment, decrement })
}

export default useCounter
