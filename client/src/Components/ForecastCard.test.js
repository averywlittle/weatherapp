import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ForecastCard from './ForecastCard'

const day = [
  {
    dt_txt: '2021-02-16 00:00:00',
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
    dt_txt: '2021-02-16 03:00:00',
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

test('renders content', () => {

  const component = render(
    <ForecastCard data={day} />
  )

  expect(component.container).toHaveTextContent(
    'Tuesday, February 16, 2021'
  )

  expect(component.container).toHaveTextContent(
    '03:00:00'
  )
})