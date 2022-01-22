import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <AppContainer>
     <GlobalStyle />
     <Switch>
      {/* <Route exact path="/" component={} /> */}

     </Switch>
    </AppContainer>
  );
}

export default App;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const AppContainer = styled.div``