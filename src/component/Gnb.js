// import styled from "styled-components";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { NoStyleA } from "util/styledComponent";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
function Gnb() {
  const GnbCommon = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: white;
    height: 86px;
    width: 100%;
  `;
  const GnbTitle = styled("h1")`
    margin-left: 16px;
    font-size: 36px;
  `;
  const GnbIconGroup = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100px;
    // margin-right: 16px;
  `;


  return (
    <GnbCommon>
      <GnbTitle>Stein.log</GnbTitle>
      <GnbIconGroup>

        <NoStyleA href="https://github.com/steinjun0" target="_blank" rel="noreferrer">
          <GitHubIcon></GitHubIcon>
        </NoStyleA>

        <NoStyleA href="https://www.instagram.com/junyoungseok/" target="_blank" rel="noreferrer">
          <InstagramIcon></InstagramIcon>
        </NoStyleA>

      </GnbIconGroup>
    </GnbCommon>
  );
}
export default Gnb;
