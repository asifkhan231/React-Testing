import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    const [amount, setAmount] = useState('')
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(pre => pre + 1)}>Increment</button>

            <input
                type='number'
                name='amount'
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
            />

            <button onClick={() => setCounter(amount)}>Set</button>
        </div>
    )
}

export default Counter
