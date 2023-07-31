import React from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const LeftBodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: column;
  border-radius: 20px;
  width: 40%;
  height: 200px;
  padding-left: 30px;
  background-color: lightyellow;
`;

const Text = styled.p`
  color: black;
  font-size: 20px;
`;

const LeftDetailBody = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <LeftBodyContainer>
      <Text>미세먼지: {data.PM10}</Text>
      <Text>초미세먼지농도: {data.PM25}</Text>
      <Text>오존농도: {data.O3}</Text>
      <Text>통합대기환경지수: {data.IDEX_MVL}</Text>
    </LeftBodyContainer>
  );
};

export default LeftDetailBody;
