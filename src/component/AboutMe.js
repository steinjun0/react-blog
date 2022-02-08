import { Box, styled } from "@mui/material";
import junProfile from "../junProfile.jpg";
const berryPeri = "#6868ac";

function AboutMe() {
  const AboutMeWrapper = styled(Box)`
    display: flex;
  `;
  const BackgroundDeco = styled(Box)`
    width: calc(50% + 360px);
    height: 454px;
    background-color: ${berryPeri};
    position: absolute;
    left: 0;
    z-index: -1;
  `;
  const TileBlock = styled(Box)`
    width: 480px;
    height: 480px;
    margin-top: 74px;
    margin-left: 160px;
    box-shadow: -18px 18px 0 rgba(0, 0, 0, 0.25);
  `;
  const TileBlockText = styled(TileBlock)`
    display: flex;
    flex-direction: column;
    align-items: start;
    border: 12px solid rgba(240, 240, 240, 1);
    background-color: ${berryPeri};
    color: white;
    padding-left: 32px;
  `;

  const TileTitle = styled("h1")`
    font-size: 36px;
    font-weight: 500;
  `;
  const TileSubTitle = styled("ul")`
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 24px;
    font-weight: 700;
    list-style-type: none;
    padding: 0;
  `;
  const TileContent = styled("li")`
    font-size: 20px;
    font-weight: 500;
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
      <TileBlock>
        <img style={{ width: "480px" }} src={junProfile} alt="" />
      </TileBlock>
      <TileBlockText>
        <div>
          <TileTitle>About Me</TileTitle>
          {data.map((item, index) => {
            return (
              <TileSubTitle>
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
