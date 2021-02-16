import React from 'react'
import ForecastCard from './ForecastCard'

const FiveDay = ({ data }) => {

    if (data) {
        const firstDay = new Date(data.list[0].dt_txt).getDate()
        const days = []

        for (let i = 0; i < data.list.length; i++) {
            const snapshot = data.list[i]
            const date = new Date(snapshot.dt_txt).getDate()
            const diff = Number(date) - Number(firstDay)

            if (days[diff] === undefined) {
                days[diff] = []
            }
            days[diff].push(snapshot)

        }

        return (
            <div className='forecast-data-container'>
                <p className='forecast-header'>5 day forecast for {data.city.name}, {data.city.country}</p>

                <div className='forecast-list'>
                    {days.map(day => <ForecastCard data={day} key={day[0].dt} />)}
                </div>
            </div>
        )
    } else return null
}

export default FiveDay