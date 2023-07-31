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
  background-color: white;
  border-radius: 20px;
`;

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

const Rate = styled(Title)`
  /* color: blue; */
  font-size: 35px;
  margin: 10px;
  font-weight: bold;
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

const RateContiner = styled(BodyContainer)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

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

const RightBodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  opacity: 0.8;
  textalign: center;
  width: 60%;
  height: 100%;
  background-color: lightgreen;
`;

const Detail = () => {
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

  const getTextColor = (idexNm) => {
    if (idexNm === "좋음") {
      return "green";
    } else if (idexNm === "나쁨") {
      return "red";
    } else {
      return "grey";
    }
  };

  return (
    <Container>
      <Header>
        <Title>
          {data.MSRRGN_NM} | {data.MSRSTE_NM}
        </Title>
        <Text>측정일: {formattedDate}</Text>
      </Header>
      <BodyContainer>
        <LeftBodyContainer>
          <Text>미세먼지: {data.PM10}</Text>
          <Text>초미세먼지농도: {data.PM25}</Text>
          <Text>오존농도: {data.O3}</Text>
          <Text>통합대기환경지수: {data.IDEX_MVL}</Text>
        </LeftBodyContainer>
        <RightBodyContainer>
          <BodyContainer>
            <RateContiner>
              <Text>통합대기환경등급</Text>
              <Rate style={{ color: getTextColor(data.IDEX_NM) }}>
                {data.IDEX_NM === "점검 중" ? "-" : data.IDEX_NM}
              </Rate>
            </RateContiner>
          </BodyContainer>
        </RightBodyContainer>
      </BodyContainer>
    </Container>
  );
};

export default Detail;
