import { Box, styled } from "@mui/material";
import junProfile from "../junProfile.jpg";
import { DESKTOP_WIDTH, DESKTOP_SMALL_WIDTH, TABLET_WIDTH } from "../style";

const berryPeri = "#6868ac";

function AboutMe() {
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
    border: 12px solid rgba(240, 240, 240, 1);
    background-color: ${berryPeri};
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
  const data = [
    {
      subTitle: "University of SEOUL",
      content: "Electronics and Computer Engineering",
    },
    { subTitle: "DACON", content: "Front-End Developer" },
    { subTitle: "Web Developer", content: " Web Developer" },
  ];
  return (
    <AboutMeWrapper>
      <BackgroundDeco></BackgroundDeco>
      {/* <TileBlockImageBig src={junProfile} alt=""></TileBlockImageBig> */}
      <TileBlockText>
        <TileBlockImage src={junProfile} alt=""></TileBlockImage>
        <div>
          <TileTitle>About Me</TileTitle>
          {data.map((item, index) => {
            return (
              <TileSubTitle key={index}>
                {item.subTitle}
                <TileContent>
                  &nbsp;&nbsp;&nbsp;&nbsp;{item.content}
                </TileContent>
              </TileSubTitle>
            );
          })}
        </div>
      </TileBlockText>
    </AboutMeWrapper>
  );
}

export default AboutMe;
