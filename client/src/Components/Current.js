import React from 'react'

const Current = ({data}) => {

    return (
        <div className='weather-data-container'>
            <p className='currently'>It's currently...</p>
            <h4 className='temp'>{data.main.temp} ℉</h4>
            <p className='city'>in {data.name}, {data.sys.country}</p>
        </div>
    )
}

export default Current