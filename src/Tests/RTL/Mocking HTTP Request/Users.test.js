import { screen, render } from "@testing-library/react"
import Users from "./Users"

describe('users data', () => {
    test('render correctly', () => {
        render(<Users />)

        const usertext = screen.getByText('Users')
        expect(usertext).toBeInTheDocument()
    })

    test('renders list of users', async () => {
        render(<Users />)

        const usersList = await screen.findAllByRole('listitem')
        expect(usersList).toHaveLength(3)
    })
})