import React, { useCallback, useMemo, useState,useContext } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "./EventForm/EventForm";
import { sampleData } from "../API/sampleData";
import toggleContext from "../Store/toggleContext";

const EventsDashBoard = () => {
  const show = useContext(toggleContext)

  return (
    <Grid>
      <Grid.Column width={10}>
        <h2><EventList events={sampleData}/></h2>
      </Grid.Column>
      <Grid.Column width={6}>
       {show.toggle && <EventForm/>}
      </Grid.Column>
    </Grid>
  );
};

export default EventsDashBoard;
