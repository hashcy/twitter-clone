import React from "react";
import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
import { UserInfo } from "..";
const Profile = ({userName, tweetCount}) => {
  return (
    <Container>
      <Navbar>
        <IoMdArrowRoundBack color="red"/>
        <div className="wrapper">
          <UserName>{userName||"harsh"}</UserName>
          <TweetCount>{tweetCount||"2"}tweets</TweetCount>
        </div>
      </Navbar>
      <UserInfo/>
    </Container>
  );
};

export default Profile;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  max-width: 600px;
  min-height: 100vh;
  border: 1px solid var(--border-shade-1);
  position: relative;
  display: flex;
  flex-direction: column;
  //background-color: red;
  color: var(--white-shade-1);
`;

const Navbar = styled.div`
  min-height: 10vh;
  max-width: 600px;
  display: flex;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: flex-start;
  }
`;

const UserName = styled.h1`
  font-size: 1.25rem;
  //color: red;
`;
const TweetCount = styled.h3`
  font-size: 0.75rem;
  font-weight: normal;
  opacity: 0.5;
`;
