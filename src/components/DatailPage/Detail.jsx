import React from "react";
import { styled } from "styled-components";
import DetailHeader from "./DetailHeader";
import LeftDetailBody from "./LeftDetailBody";
import RightDetailBody from "./RightDetailBody";

const Container = styled.div`
  width: 70%;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const Detail = () => {
  return (
    <Container>
      <DetailHeader />
      <BodyContainer>
        <LeftDetailBody />
        <RightDetailBody />
      </BodyContainer>
    </Container>
  );
};

export default Detail;
