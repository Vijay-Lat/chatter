import React from "react";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

const EventListItem = (props) => {
  const {eventName} = props
  console.log(eventName,"event")
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={`${eventName?.hostPhotoURL}`} />
            <Item.Content>
              <Item.Header content={`${eventName?.title}`} />
              <Item.Description>Hosted By {eventName?.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {eventName.date}
          <Icon name="marker" />  {eventName.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {eventName.attendees.map((att)=><EventListAttendee key={att?.id} person={att}/>)}
        </List>
      </Segment>
      <Segment clearing>
        <div>{eventName.description}</div>
        <Button color="teal" floated="right" content='View'/>
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
