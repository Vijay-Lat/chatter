import EventsDashBoard from "./Events/EventsDashBoard";
import NavBar from "./Nav/NavBar";
import "./App.css"
import { Container } from "semantic-ui-react";
import { ToggleContextProvider } from "./Store/toggleContext";
function App() {
  return (
    <ToggleContextProvider>
      <NavBar/>
      <Container className="main">
      <EventsDashBoard />
      </Container>
    </ToggleContextProvider>
  );
}

export default App;
