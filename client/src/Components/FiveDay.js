import React from 'react'

const FiveDay = ({data}) => {

    return (
        <div className='weather-data-container'>
            {data.city.name} 5 day forecast
        </div>
    )
}

export default FiveDay