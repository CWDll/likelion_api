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
  background-color: green;
`;

const Title = styled.h1`
  font-size: 50px;
  color: red;
`;

const Detail = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <Container>
      <Title>측정소: {data.MSRSTE_NM}</Title>
      <p>측정일: {data.MSRDT}</p>
      <p>미세먼지: {data.PM10}</p>
      <p>초미세먼지농도: {data.PM25}</p>
      <p>오존농도: {data.O3}</p>
      <p>통합대기환경등급: {data.IDEX_NM}</p>
      <p>통합대기환경지수: {data.IDEX_MVL}</p>
      <p>권역: {data.MSRRGN_NM}</p>
      {/* 여기에 다른 정보들도 추가할 수 있습니다. */}
    </Container>
  );
};

export default Detail;
