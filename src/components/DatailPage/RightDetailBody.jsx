import React from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

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

const BodyContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const RateContainer = styled(BodyContainer)`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  color: black;
  font-size: 20px;
`;

const Rate = styled.h1`
  color: black;
  font-weight: bold;
  textalign: center;
  font-size: 35px;
  margin: 10px;
`;

const RightDetailBody = () => {
  const location = useLocation();
  const { data } = location.state;

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
    <RightBodyContainer>
      <BodyContainer>
        <RateContainer>
          <Text>통합대기환경등급</Text>
          <Rate style={{ color: getTextColor(data.IDEX_NM) }}>
            {data.IDEX_NM === "점검 중" ? "-" : data.IDEX_NM}
          </Rate>
        </RateContainer>
      </BodyContainer>
    </RightBodyContainer>
  );
};

export default RightDetailBody;
