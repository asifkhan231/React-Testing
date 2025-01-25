import React, { useEffect, useState } from 'react'

export default function Users() {
    const [users, setUsers] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()

            setUsers(data)
        } catch (error) {
            console.log('something went wrong:', error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <ul>
        <h1>Users</h1>
            {users && users.map(user => (
                <li key={user.id}>
                    <h3>{user.name}</h3>
                    <h5>{user.email}</h5>
                </li>
            ))
            }
        </ul>
    )
}
