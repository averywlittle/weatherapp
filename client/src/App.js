import './App.css';
import React, { useState, useEffect } from 'react'
import {
  Switch, Route, Redirect
} from 'react-router-dom'

import weatherService from './services/weather'
import Menu from './Components/Menu'
import UserInput from './Components/UserInput'
import Notification from './Components/Notification'
import Current from './Components/Current'
import FiveDay from './Components/FiveDay'

const App = () => {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [input, setInput] = useState('')
  const [current, setCurrent] = useState(null)
  const [fiveDay, setFiveDay] = useState(null)

  useEffect(() => {
    
    const timeoutId = setTimeout(async () => {
      if (input.length > 0) {
        const dataObj = { cityName: input, coords: null }
  
        const currentData = await weatherService.getCurrent(dataObj)  
        const fiveData = await weatherService.get5Day(dataObj)

        if ((currentData.cod && currentData.cod === '404') || (fiveData.cod && fiveData.cod === '404')) {
          setError('The entered city name returned no result. Please try a different name.')
          setTimeout(() => {
            setError('')
          }, 5000)
        } else {
          setCurrent(currentData)
          setFiveDay(fiveData)


          setMessage(`Weather data for ${currentData.name} retrieved.`)
          setTimeout(() => {
            setMessage('')
          }, 5000)
        }

      } else {
        geoUtility()
      }

    }, 500)

    return () => clearTimeout(timeoutId)

  }, [input])


  const geoUtility = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    const success = async (pos) => {

      const dataObj = { 
        cityName: null, 
        coords: {
          longitude: pos.coords.longitude,
          latitude: pos.coords.latitude
        } 
      }

      const currentData = await weatherService.getCurrent(dataObj)
      setCurrent(currentData)

      const fiveData = await weatherService.get5Day(dataObj)
      setFiveDay(fiveData)

      setMessage(`Weather data for ${currentData.name} retrieved.`)
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }

    const error = (err) => {
      setError('Could not retrieve your location, please type a city to get weather report.')
      setTimeout(() => {
        setError('')
      }, 5000)
    }

    if (current && fiveDay) {
      return null
    } else {
      // get the user location from browser
      navigator.geolocation.getCurrentPosition(success, error, options)
    }
  }

  return (
    <div className='container'>
      <Menu />

      <UserInput setInput={setInput} input={input}/>

      <Switch>
        <Route path='/5day'>
          {fiveDay && <FiveDay data={fiveDay}/>}
        </Route>

        <Route path='/current'>
          {current && <Current data={current}/>}
        </Route>

        <Route path='/'>
          <Redirect to='/current' />
        </Route>

      </Switch>

      <Notification message={message} error={error}/>
    </div>
  );
}

export default App;
