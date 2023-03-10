import React, { useEffect, useState } from "react";
import styled from "styled-components";
import winter_items from "../static/image/winter_items.png";
import data from "../Data.json";

const MainText = styled.p`
  font-size: 0.9rem;
  margin-left: 25px;
`;
const Box = styled.div`
  width: 100%;
  height: 230px;
  margin-top: 20px;
  padding-top: 7px;
  background-color: #ecf0f3;
  display: inline-block;
  border-radius: 10px;
  box-shadow: -5px -5px 10px 0px rgba(255, 255, 255, 0.7),
    5px 5px 10px 0px rgba(166, 180, 200, 0.5);
  @media (max-width: 820px) {
    width: 95%;
    display: inline-block;
    margin-left: 18px;
  }
  @media (max-width: 500px) {
    width: 95%;
    height: 190px;
    margin: 20px auto 15px auto;
    margin-left: 10px;
  }
`;

const OutputSeasonDiv = styled.div`
  width: 100%;
  margin: 10px auto 20px auto;
  display: flex;
  justify-content: center;
  /* display: inline-block; */
  @media (max-width: 820px) {
    width: 95%;
  }
  @media (max-width: 500px) {
    width: 98%;
  }
`;
const ItemImg = styled.img`
  width: 60px;
  height: 60px;
  margin: 5px;
  object-fit: contain;
  border-radius: 10px;
  background-color: #ecf0f3;
  padding: 15px;
  box-shadow: inset -5px -5px 10px 0px rgba(255, 255, 255, 0.7),
    inset 5px 5px 10px 0px rgba(166, 180, 200, 0.5);
  @media (max-width: 500px) {
    width: 10%;
    height: 10%;
    /* object-fit: contain; */
  }
`;

const SeasonItemsDiv = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 820px) {
    width: 95%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const SeasonItemText = styled.span`
  font-size: 0.6rem;
  padding: 10px;
  /* margin: 1px; */
  color: #686868;
  border-radius: 50px;
  background-color: #ecf0f3;
  box-shadow: -5px -5px 10px 0px rgba(255, 255, 255, 0.7),
    5px 5px 10px 0px rgba(166, 180, 200, 0.5);
  @media (max-width: 500px) {
    padding: 5px;
    font-size: 0.5rem;
  }
`;

function FindTempClothes(temp) {
  if (temp <= 4) {
    return "?????????";
  } else if (temp >= 5 && temp <= 8) {
    return "?????????";
  } else if (temp >= 9 && temp <= 11) {
    return "?????????";
  } else if (temp >= 12 && temp <= 16) {
    return "?????????";
  } else if (temp >= 17 && temp <= 19) {
    return "??????";
  } else if (temp >= 20 && temp <= 22) {
    return "???";
  } else if (temp >= 23 && temp <= 27) {
    return "?????????";
  } else if (temp >= 28) {
    return "?????????";
  }
}

/** ?????? ?????? ????????? ?????? ??? ????????? ?????? ?????? */
function OutputSeasonClothes({ season }) {
  return (
    <>
      {Object.values(data[season].img).map((it, id) => (
        <>
          {console.log(it)}
          <ItemImg src={`${process.env.PUBLIC_URL}/images/${it}`} key={id} />
        </>
      ))}
    </>
  );
}
/** ?????? ?????? ????????? ?????? ?????? ????????? ????????? ?????? ??????*/
function OutputSeasonItems_Text({ season }) {
  return (
    <>
      {/* <RecoMainText>???? ????????? ?????? ?????? ?????????</RecoMainText> */}
      <SeasonItemsDiv>
        {Object.values(data[season].text).map((it, id) => (
          <>
            <SeasonItemText>#{it}</SeasonItemText>
          </>
        ))}
      </SeasonItemsDiv>
    </>
  );
}

function Attire({ temp }) {
  const [season, setSeason] = useState();

  useEffect(() => {
    let season = FindTempClothes(temp);
    setSeason(season);
  }, temp);

  return (
    <>
      <Box>
        <MainText>???? ?????? ????????? ???????????? ?????? ?????????</MainText>
        <OutputSeasonDiv>
          {temp && season && <OutputSeasonClothes season={season} />}
        </OutputSeasonDiv>

        {temp && season && <OutputSeasonItems_Text season={season} />}
      </Box>
    </>
  );
}

export default Attire;
