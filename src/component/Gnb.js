// import styled from "styled-components";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
function Gnb() {
  const GnbCommon = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: black;
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
        <GitHubIcon></GitHubIcon>
        <InstagramIcon></InstagramIcon>
      </GnbIconGroup>
    </GnbCommon>
  );
}
export default Gnb;
