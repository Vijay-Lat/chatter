import React from 'react'
import { Image, List } from 'semantic-ui-react'

const EventListAttendee = (props) => {
    const {person} = props 
    return (
        <List.Item>
            <Image size='mini' circular src={`${person.photoURL}`}/>
        </List.Item>
    )
}

export default EventListAttendee
