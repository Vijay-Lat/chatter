import React from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import useToggleContext from '../../API/useToggleContext'

const EventForm = () => {
    const hide = useToggleContext()
    return (
        <Segment clearing>
            <Header content='Create New Event'/>
            <Form>
                <Form.Field>
                    <input type='text' placeholder='Event title'/>
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Category'/>
                </Form.Field>
                  <Form.Field>
                    <input type='text' placeholder='Description'/>
                </Form.Field>  
                <Form.Field>
                    <input type='text' placeholder='City'/>
                </Form.Field>  
                <Form.Field>
                    <input type='text' placeholder='Venue'/>
                </Form.Field> 
                 <Form.Field>
                    <input type='date' placeholder='Date'/>
                </Form.Field>
            <Button type='submit' floated='right' positive content = 'Submit'/>
            <Button type='submit' floated='right' onClick={hide.hideFormHandler}  content = 'Cancel'/>
            </Form>
        </Segment>
    )
}

export default EventForm
