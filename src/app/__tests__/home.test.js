import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', {
      name: /Next.js CI\/CD Demo/i,
    })
    
    expect(heading).toBeInTheDocument()

    const linkElement = screen.getByText(/Get started by editing/i)
    expect(linkElement).toBeInTheDocument()
  })
})