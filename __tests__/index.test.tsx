/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import renderer from 'react-test-renderer'

describe('Home', () => {
  it('renders homepage unchanged', () => {
    const tree = renderer.create(<Home />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
  })
})
