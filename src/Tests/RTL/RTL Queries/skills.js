import React, { useEffect, useState } from 'react'

function Skills({ list }) {
    const [isLogged, setIsLogged] = useState(false)
    let i = 0
    useEffect(() => {
        setTimeout(() => {
            setIsLogged(true)
        },1001)
    }, [])
    return (
        <>
            <div>Submit</div>
            <ul>
                {list.map(item => (
                    <li key={i++}>{item}</li>
                )
                )}
            </ul>{
                isLogged ? <button>Learn Skills</button> : <button onClick={() => setIsLogged(true)}>Login</button>
            }
        </>
    )
}

export default Skills
