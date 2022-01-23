import React from "react";
import styled from "styled-components";

const UserInfo = ({
  img,
  name,
  userName,
  userDp,
  joinedOn,
  followingCount,
  followerCount,
  editBtnFx,
}) => {
  return (
    <Container>
      <BgImg src={img} />
      <UserDP src={userDp}/>
      <Info>
      
        <LeftWrapper>
          <h1 className="name">{name || "temp"}</h1>
          <h1 className="opaqueAttribute">{userName || "temp"}</h1>
          <h1 className="opaqueAttribute">Joined {joinedOn || "temp"}</h1>
          <h1 className="opaqueAttribute">
            {followingCount || "temp"}
            <span>Following</span>
          </h1>
          <div className="opaqueAttribute">
            {followerCount || "temp"}
            <span>Following</span>
          </div>
        </LeftWrapper>

        <RightWrapper>
          <StyledButton onClick={editBtnFx}>Edit Profile</StyledButton>
        </RightWrapper>
      </Info>
    </Container>
  );
};

export default UserInfo;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const Container = styled.div`
  min-width: 600px;
  min-height: 30vh;
  border: 1px solid var(--border-shade-1);
  position: relative;
  display: flex;
  flex-direction: column;
  //background-color: red;
  color: var(--white-shade-1);
`;

const BgImg = styled.img`
  background-color: #2f3336;
  width: 100%;
  min-height: 27vh;
  flex: 1;
  border: none;
`;
const Info = styled.div`
  border: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 27vh;
  flex: 1;
 
  .name {
    font-size: 1.25rem;
    margin-top: 3rem;
  }
  .opaqueAttribute {
    font-size: 1rem;
    opacity: 0.5;
    margin-bottom: 0.75rem;
  }

  span {
    opacity: 1;
  }
`;
const StyledButton = styled.button`
  border-radius: 3rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  color: var(--white-shade-1);
  background-color: #000;
  font-size: 1rem;
  font-weight: bold;
  height: 2rem;
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //flex-grow: 4;
  justify-content: end;
  padding: 1rem;
  //align-items: left;'
`;
const RightWrapper = styled.div`
  display: flex;
  //background-color: wheat;
  align-self: top;
  justify-self: flex-end;
  //flex-grow: 1;
  padding: 1rem;
`;

const UserDP = styled.img`
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    background-color: #dfe9fc;
    position: absolute;
    top:35%;
    left:3%;
`
