import './App.css';
import React, { useState, useEffect } from 'react'
import {
  Switch, Route, Redirect
} from 'react-router-dom'
import weatherService from './services/weather'
import Menu from './Components/Menu'
import UserInput from './Components/UserInput'
import Notification from './Components/Notification'

const App = () => {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [input, setInput] = useState('')
  const [location, setLocation] = useState('Ann Arbor')
  const [current, setCurrent] = useState(null)
  const [five, setFive] = useState(null)

  useEffect(() => {
    // change this to just call the functions if null
    const timeoutId = setTimeout(async () => {
      let cityName
      if (input.length > 0) {
        cityName = input
      } else {
        cityName = location
      }
      const currentData = await weatherService.getCurrent(cityName)
      setCurrent(currentData)
      console.log('current', currentData)

      const fiveData = await weatherService.get5Day(cityName)
      setFive(fiveData)
      console.log('5day', fiveData)
    }, 500)

    return () => clearTimeout(timeoutId)

  }, [input, location])

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    const success = async (pos) => {
      console.log('position', pos)

      // use google api await call for city
    }

    const error = (err) => {
      setError('Could not retrieve your location, please type the city you want')
      setTimeout(() => {
        setError('')
      }, 5000)
    }
    // get the user location from browser
    navigator.geolocation.getCurrentPosition(success, error, options)
    
  }, [])

  return (
    <div className="container">
      <Menu />

      <UserInput setInput={setInput} input={input}/>

      <Switch>
        <Route path="/5day">
          {/* {five && <p>Five day forecast for {five.city.name}</p>} */}
        </Route>

        <Route path="/current">
          {current && <p>Current weather in {current.name}</p>}
        </Route>

        <Route path="/">
          <Redirect to="/current" />
        </Route>

      </Switch>

      <Notification message={message} error={error}/>
    </div>
  );
}

export default App;
