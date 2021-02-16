import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Current from './Current'

const current = {
  main: {
    temp: 20
  },
  name: 'Detroit',
  sys: {
      country: 'US'
  }
}

test('renders content', () => {

  const component = render(
    <Current data={current} />
  )

  expect(component.container).toHaveTextContent(
    '20 ℉'
  )

  expect(component.container).toHaveTextContent(
    'Detroit'
  )
})