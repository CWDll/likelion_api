import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BodySection,
  DataTable,
  HeadSection,
  HeadText,
  HomeContainer,
  TableTd,
  TableTh,
} from "./components/BodyStyle";

const Home = () => {
  const navigate = useNavigate();

  // State 작성------------------------------------------------
  const [weatherData, setWeatherData] = useState([]);
  const API_KEY = import.meta.env;
  //비구조화 할당 : import.meta.env 안에 { }안 속 놈과 이름이 같은 게 있으면 바로 할당해준다. 만약 없으면 할당X
  //gitignore에 env 넣음으로써 인증키 숨김.
  const { VITE_APP_API_KEY } = import.meta.env;

  // Function 작성---------------------------------------------
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://openAPI.seoul.go.kr:8088/${VITE_APP_API_KEY}/json/RealtimeCityAir/1/5/`
      );
      setWeatherData(response.data.RealtimeCityAir.row);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(weatherData);

  // OPEN API 비동기로 불러와 State에 저장하기

  // ComponentDidMount-----------------------------------------
  useEffect(() => {
    fetchData();
  }, []);

  const sortedData = weatherData.sort((a, b) => a.PM10 - b.PM10).slice(0, 3);
  console.log(sortedData);

  const getTextColor = (idexNm) => {
    if (idexNm === "좋음") {
      return "green";
    } else if (idexNm === "나쁨") {
      return "red";
    } else {
      return ""; // 기본 색상, 원하는 색상으로 설정하거나 특정 색상이 없을 경우 빈 문자열로 남겨둘 수 있습니다.
    }
  };

  return (
    <HomeContainer>
      <HeadSection>
        <HeadText>서울시 권역별 실시간 대기환경 현황</HeadText>
      </HeadSection>
      <BodySection>
        <DataTable>
          <thead>
            <tr>
              <TableTh>측정일</TableTh>
              <TableTh>측정소</TableTh>
              <TableTh>미세먼지</TableTh>
              <TableTh>초미세먼지농도</TableTh>
              <TableTh>통합대기환경등급</TableTh>
              <TableTh>통합대기환경지수</TableTh>
            </tr>
          </thead>
          <tbody>
            {weatherData.map((data, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor:
                    data.MSRSTE_NM === "중구" ? "orange" : "inherit",
                }}
              >
                <TableTd>{data.MSRDT}</TableTd>
                <TableTd
                  onClick={() =>
                    navigate(`/detail/${data.MSRSTE_NM}`, {
                      state: {
                        data: data,
                      },
                    })
                  }
                >
                  {data.MSRSTE_NM}
                </TableTd>
                <TableTd
                  style={{ color: sortedData.includes(data) ? "yellow" : "" }}
                >
                  {data.PM10}
                </TableTd>
                <TableTd>{data.PM25}</TableTd>
                <TableTd style={{ color: getTextColor(data.IDEX_NM) }}>
                  {data.IDEX_NM === "점검 중" ? "-" : data.IDEX_NM}
                </TableTd>
                <TableTd>{data.IDEX_MVL}</TableTd>
              </tr>
            ))}
          </tbody>
        </DataTable>
      </BodySection>
    </HomeContainer>
  );
};

export default Home;
