import styled from "styled-components";

const EntryPage = () => {
  return (
    <Container>
      <div className="row">
        <div className="column-1">
          <img src="/Assets/Images/twitter-bcg.png" alt="twitter" />
        </div>
        <div className="column-2">
          <h1>Happening now</h1>
          <h3>Join Twitter today.</h3>
          <button className="google" type="onclick">Sign up with Google</button>
          <br></br>
          <button className="apple" type="onclick">Sign up with Apple</button>
          <p>----------or----------</p>
          <button className="phone" type="onclick" >Sign up with phone or email</button>
          <p>By signing up, you agree to the Terms of Service and Privacy policy, including Cookie use</p>
          <p>Already have an account</p>
          <button className="submit" type="onclick">Sign in</button>
        </div>
      </div>
    </Container>
  );
};

export default EntryPage;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  color: var(--white-shade-1);
  .row{
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .column
`;
