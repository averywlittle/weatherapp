import React from 'react'

const UserInput = (props) => {
    return (
        <div className='user-input'>
            <p>Enter your city: </p>
            <input
                type='text'
                value={props.input}
                onChange={event => props.setInput(event.target.value)}
            />
        </div>
    )
}

export default UserInput