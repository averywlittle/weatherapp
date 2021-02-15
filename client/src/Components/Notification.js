import React from 'react'

const Notification = (props) => {

    if (props.message.length > 0) return (
        <div className='notification'>
            {props.message}
        </div>
    ) 
    else if (props.error.length > 0) return (
        <div className='notification error'>
            {props.error}
        </div>
    )
    else return null
}

export default Notification