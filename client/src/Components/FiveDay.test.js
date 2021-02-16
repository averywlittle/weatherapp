import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import FiveDay from './FiveDay'

const fiveDay = {
  city: {
      name: 'Ann Arbor',
      country: 'US'
  },
  list: [
    {
      dt_text: '2021-02-16 00:00:00',
      main: {
        temp: 12.31
      },
      weather: [
        {
          icon: '13n'
        }
      ]
    },
    {
      dt_text: '2021-02-17 00:00:00',
      main: {
        temp: 12.31
      },
      weather: [
        {
          icon: '13n'
        }
      ]
    },
    {
      dt_text: '2021-02-18 00:00:00',
      main: {
        temp: 12.31
      },
      weather: [
        {
          icon: '13n'
        }
      ]
    },
  ]
}

test('renders content', () => {

  const component = render(
    <FiveDay data={fiveDay} />
  )

  expect(component.container).toHaveTextContent(
    '5 day forecast for Ann Arbor, US'
  )
})