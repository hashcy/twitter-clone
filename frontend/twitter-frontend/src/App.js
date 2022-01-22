import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { EntryPage } from "./Pages";

function App() {
  return (
    <AppContainer>
     <GlobalStyles />
     <Switch>
      <Route exact path="/" component={EntryPage} />

     </Switch>
    </AppContainer>
  );
}

export default App;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const AppContainer = styled.div``

