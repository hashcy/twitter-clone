import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./Components";
import { GlobalStyles } from "./GlobalStyles";
import { EntryPage } from "./Pages";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={EntryPage} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </AppContainer>
  );
}

export default App;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const AppContainer = styled.div`
  background-color: var(--black-shade-1);

  min-height: 100vh;
`;
