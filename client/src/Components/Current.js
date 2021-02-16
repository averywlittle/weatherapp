import React from 'react'

const Current = ({data}) => {

  if (data) return (
    <div className='weather-data-container'>
      <p className='currently'>It's currently...</p>
        <h4 className='temp'>{data.main.temp} ℉</h4>
        <p className='city'>in {data.name}, {data.sys.country}</p>
      </div>
  )
  else return null
}

export default Current