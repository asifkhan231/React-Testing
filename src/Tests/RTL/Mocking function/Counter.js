import React from 'react'

function Counter(props) {
    const { count, increment, decrement } = props

    return (
        <div>
            {count && (<h2>count</h2>)}
            {increment && (<button onClick={increment}>Increment</button>)}
            {decrement && (<button onClick={decrement}>Decrement</button>)}
        </div>
    )
}

export default Counter
