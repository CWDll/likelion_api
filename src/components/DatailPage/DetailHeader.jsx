import React from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 30px;
  color: black;
  font-weight: bold;
  textalign: center;
`;

const Text = styled.p`
  color: black;
  font-size: 20px;
`;

const DetailHeader = () => {
  const location = useLocation();
  const { data } = location.state;

  // MSRDT에서 연도, 월, 일을 추출하여 한글로 표시할 문자열 생성
  const year = data.MSRDT.substring(0, 4);
  const month = data.MSRDT.substring(4, 6);
  const day = data.MSRDT.substring(6, 8);
  const formattedDate = `${year}년 ${parseInt(month, 10)}월 ${parseInt(
    day,
    10
  )}일`;

  return (
    <Header>
      <Title>
        {data.MSRRGN_NM} | {data.MSRSTE_NM}
      </Title>
      <Text>측정일: {formattedDate}</Text>
    </Header>
  );
};

export default DetailHeader;
