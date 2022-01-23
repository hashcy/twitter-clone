import styled from "styled-components";
// import { ReactComponent as Stars } from "../../SVGs/stars.svg";
import stars from "./stars.svg";
import pic from "./pic.svg";
const Home = () => {
  return (
    <Container>
      <NavContainer>
        <div className="center">
          <span>Home</span>
          <div className="svg-container">
            <img src={pic} alt="" />
          </div>
        </div>
      </NavContainer>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
      <h1>qweqweqw</h1>
    </Container>
  );
};

export default Home;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.section`
  max-width: 600px;
  min-height: 100vh;
  border: 1px solid var(--border-shade-1);
  position: relative;

  color: var(--white-shade-1);

  svg {
    color: white;
  }
`;

const NavContainer = styled.nav`
  min-height: 3.3rem;
  width: 600px;
  backdrop-filter: blur(12px);

  border: 1px solid #535a5f;
  padding: 0 1rem;
  color: var(--white-shade-1);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.65);
  position: fixed;
  top: 0;
  left: 0;

  .center {
    border: 1px solid var(--border-shade-1);
    width: 100%;
    /* display: flex; */
    /* align-items: center; */

    /* span {
      font-size: 1.5rem;
    } */
  }
  img {
    width: 2rem;
    height: 2rem;
  }
  svg {
  }
`;
