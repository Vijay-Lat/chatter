import React from 'react'
import EventListItem from './EventListItem'

const EventList = (props) => {
    const {events} = props
    return (
        <div>
            {events?.length >0 ? events.map((eventName)=><EventListItem eventName={eventName} key={eventName?.id}/>):"No Events"}
        </div>
    )
}

export default EventList
