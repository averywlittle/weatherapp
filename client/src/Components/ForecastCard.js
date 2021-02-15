import React from 'react'

const ForecastCard = ({data}) => {

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' } 
    const day = new Date(data[0].dt_txt).toLocaleDateString(undefined, options)

    return (
        <div className='forecast-card'>
            <h4>{day}</h4>
            {data.map(snapshot => {
                const imgUrl = `http://openweathermap.org/img/wn/${snapshot.weather[0].icon}.png`

                return <div key={snapshot.dt_txt} className='snapshot'>
                    <p>{new Date(snapshot.dt_txt).toTimeString().split(' ')[0]}</p>
                    <p>{snapshot.main.temp} ℉</p>
                    <img src={imgUrl}/>
                </div>
                }
            )}
        </div>
    )
}

export default ForecastCard