import React from 'react'

const UserInput = (props) => {
  return (
    <div className='user-input'>
      <label>
        Enter your city:
      </label>
      <input
        type='text'
        value={props.input}
        onChange={event => props.setInput(event.target.value)}
        className='input-box'
      />
    </div>
  )
}

export default UserInput