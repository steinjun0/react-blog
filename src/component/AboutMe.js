import { Box, styled } from "@mui/material";
import junProfile from "assets/img/junProfile.jpg";
import { DESKTOP_WIDTH, DESKTOP_SMALL_WIDTH, TABLET_WIDTH } from "../style";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const berryPeri = "#6868ac";

AboutMe.propTypes = {
  categoryIndex: PropTypes.number.isRequired,
};
const AboutMeWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 532px;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    height: 432px;
  }
`;
const BackgroundDeco = styled(Box)`
  width: calc(50% + 360px);
  height: 454px;
  background-color: ${berryPeri};
  position: absolute;
  left: 0;
  z-index: -1;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    height: 354px;
  }
`;
const TileBlock = styled(Box)`
  width: 460px;
  height: 460px;
  margin-top: 72px;
  box-shadow: -18px 18px 0 rgba(0, 0, 0, 0.25);
`;
const TileBlockImage = styled("img")`
  margin-top: -12px;
  width: 460px;
  height: 460px;
  left: calc(-460px - 80px);
  box-shadow: -18px 18px 0 rgba(0, 0, 0, 0.25);
  position: absolute;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    left: calc(-230px - 160px);
    margin-top: 182px;
    width: 330px;
    height: 330px;
  }
  @media only screen and (max-width: ${DESKTOP_SMALL_WIDTH}px) {
    position: absolute;
    left: calc(215px + 24px);
    margin-top: 230px;
    width: 174px;
    height: 174px;
  }
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    width: 0;
    height: 0;
  }
`;

const TileBlockText = styled(TileBlock)`
  position: absolute;
  left: calc(50% + 80px);
  display: flex;
  flex-direction: column;
  align-items: start;
  // border: 12px solid rgba(240, 240, 240, 1);
  // background-color: ${berryPeri};
  box-shadow: none;
  color: white;
  padding-left: 32px;
  box-sizing: border-box;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    left: calc(50%);
    margin-top: 36px;
  }
  @media only screen and (max-width: ${DESKTOP_SMALL_WIDTH}px) {
    left: calc(50% - 230px);
  }
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    padding-left: 16px;
    left: calc(50% - 180px);
    width: 360px;
    height: 360px;
  }
`;

const TileTitle = styled("h1")`
  font-size: 52px;
  font-weight: 500;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 40px;
  }
`;
const TileSubTitle = styled("ul")`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 24px;
  font-weight: 700;
  list-style-type: none;
  padding: 0;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 20px;
  }
`;
const TileContent = styled("li")`
  font-size: 16px;
  font-weight: 400;
  list-style-type: none;
`;

const getRandomSpell = (length = 1) => {
  let result = "";
  // result = String.fromCharCode(Math.floor(Math.random() * 25 + 65)); // 65 ~ 90 (ASCII Capital letter range)
  for (let i = 0; i < length - 1; i++) {
    result += String.fromCharCode(Math.floor(Math.random() * 25 + 97)); // 97 ~ 122 (ASCII small letter range)
  }
  return result;
};

const findSpaceOfString = (referenceString) => {
  let spacePositions = [];
  referenceString.split(" ").forEach((word, index) => {
    const prevWordLength = spacePositions[index - 1]
      ? spacePositions[index - 1]
      : 0;
    spacePositions.push(word.length + prevWordLength);
  });

  return spacePositions;
};

const addSpaceToString = (inputString, spacePositions) => {
  let outputString = (" " + inputString).slice(1);
  spacePositions.forEach((spacePosition, index) => {
    outputString =
      outputString.slice(0, spacePosition) +
      " " +
      outputString.slice(spacePosition + 1);
  });
  return outputString;
};

function ConvertTextEffect({ init, dest }) {
  function* getGeneratorConvertText(init, dest) {
    yield init;
    yield init[0] +
      addSpaceToString(
        getRandomSpell(1 * ((dest.length - init.length) / 7) + init.length - 1),
        findSpaceOfString(init)
      );
    yield init[0] +
      addSpaceToString(
        getRandomSpell(2 * ((dest.length - init.length) / 7) + init.length - 1),
        findSpaceOfString(init)
      );
    yield addSpaceToString(
      getRandomSpell(3 * ((dest.length - init.length) / 7) + init.length),
      findSpaceOfString(init)
    );
    yield addSpaceToString(
      getRandomSpell(4 * ((dest.length - init.length) / 7) + init.length),
      findSpaceOfString(dest)
    );
    yield addSpaceToString(
      getRandomSpell(5 * ((dest.length - init.length) / 7) + init.length),
      findSpaceOfString(dest)
    );
    yield addSpaceToString(
      getRandomSpell(6 * ((dest.length - init.length) / 7) + init.length),
      findSpaceOfString(dest)
    );
    yield dest[0] +
      addSpaceToString(
        getRandomSpell(7 * ((dest.length - init.length) / 7) + init.length - 1),
        findSpaceOfString(dest)
      );
    yield dest;
  }

  const [text, setText] = useState(init);

  const setConvertTextCycle = () => {
    setTimeout(() => {
      const genObject = generatorConvertText.next();
      if (!genObject.done) {
        setText(genObject.value);
        setConvertTextCycle();
      }
    }, 80);
  };
  const generatorConvertText = getGeneratorConvertText(init, dest);

  useEffect(() => {
    setConvertTextCycle();
  }, [dest]);

  return text;
}

function AboutMe({ categoryIndex }) {
  const data = [
    {
      title: "About Me",
      contentList: [
        {
          subTitle: "University of SEOUL",
          content: "Electronics and Computer Engineering",
        },
        { subTitle: "DACON", content: "Front-End Developer" },
        { subTitle: "Web Developer", content: " Web Developer" },
      ],
    },
    {
      title: "Camera",
      contentList: [
        {
          subTitle: "Camera Model",
          content: "Sony A6400",
        },
        {
          subTitle: "Using lens",
          content: "Sel35f18, Selp1650f3.5",
        },
        { subTitle: "Editing Program", content: "DaVinci Resolve" },
        // { subTitle: "Equipment", content: "MXL-2006\nUMC-204HD" },
      ],
    },
    {
      title: "Music",
      contentList: [
        {
          subTitle: "Compose Style",
          content: "Indie Band Style",
        },
        {
          subTitle: "Playing Instrument",
          content: "Piano & A.Guitar & E.Guitar",
        },
        { subTitle: "Digital Audio Workstation", content: "Cubase 10" },
        // { subTitle: "Equipment", content: "MXL-2006\nUMC-204HD" },
      ],
    },
  ];
  const [presentData, setPresentData] = useState({});
  useEffect(() => {
    setPresentData(data[categoryIndex]);
  }, [categoryIndex]);

  return (
    <AboutMeWrapper>
      <BackgroundDeco></BackgroundDeco>
      {/* <TileBlockImageBig src={junProfile} alt=""></TileBlockImageBig> */}
      <TileBlockText>
        <TileBlockImage src={junProfile} alt=""></TileBlockImage>
        {/* <div>
          <TileTitle>
            <ConvertTextEffect
              key={`title-cte`}
              init={presentData.title ? presentData.title : "."}
              dest={data[categoryIndex].title}
            ></ConvertTextEffect>
          </TileTitle>
          {data[categoryIndex].contentList.map((item, index) => {
            return (
              <TileSubTitle key={index}>
                <ConvertTextEffect
                  key={`subtitle-cte-${index}`}
                  init={
                    presentData.contentList &&
                      presentData.contentList[index] &&
                      presentData.contentList[index].subTitle
                      ? presentData.contentList[index].subTitle
                      : "."
                  }
                  dest={item.subTitle}
                ></ConvertTextEffect>
                <TileContent>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <ConvertTextEffect
                    key={`content-cte-${index}`}
                    init={
                      presentData.contentList &&
                        presentData.contentList[index] &&
                        presentData.contentList[index].content
                        ? presentData.contentList[index].content
                        : "."
                    }
                    dest={item.content}
                  ></ConvertTextEffect>
                </TileContent>
              </TileSubTitle>
            );
          })}
        </div> */}
      </TileBlockText>
    </AboutMeWrapper>
  );
}

export default AboutMe;
