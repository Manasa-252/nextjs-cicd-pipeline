import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    
    expect(screen.getByRole('heading', { name: 'Welcome to Next.js!' })).toBeInTheDocument()

    const linkElement = screen.getByText(/Get started by editing/i)
    expect(linkElement).toBeInTheDocument()
  })
})