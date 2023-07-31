import React from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  width: 70%;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  background-color: lightgreen;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 30px;
  color: red;
`;

const Text = styled.p`
  color: black;
  font-size: 20px;
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const LeftBodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border: 1px solid blue;
  flex-direction: column;
  width: 40%;
  height: 300px;
  padding-left: 30px;
`;

const RightBodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  textalign: center;
  width: 60%;
  height: 100%;
`;

const Detail = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <Container>
      <Header>
        <Title>
          {data.MSRRGN_NM} | {data.MSRSTE_NM}
        </Title>
        <Text>측정일: {data.MSRDT}</Text>
      </Header>
      <BodyContainer>
        <LeftBodyContainer>
          <Text>미세먼지: {data.PM10}</Text>
          <Text>초미세먼지농도: {data.PM25}</Text>
          <Text>오존농도: {data.O3}</Text>
          <Text>통합대기환경등급: {data.IDEX_NM}</Text>
          <Text>통합대기환경지수: {data.IDEX_MVL}</Text>
        </LeftBodyContainer>
        <RightBodyContainer>
          <Text>권역: {data.MSRRGN_NM}</Text>
        </RightBodyContainer>
      </BodyContainer>
      {/* 여기에 다른 정보들도 추가할 수 있습니다. */}
    </Container>
  );
};

export default Detail;
