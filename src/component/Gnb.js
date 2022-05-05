// import styled from "styled-components";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Flex, NoStyleA } from "util/styledComponent";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from 'assets/img/Logo.svg'
import { Link } from "react-router-dom";
function Gnb() {
  const GnbCommon = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    // color: white;
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
    width: 140px;
    // margin-right: 16px;
  `;


  return (
    <GnbCommon style={{
      marginTop: '50px',
    }}>
      <Link to='/'>
        <img src={logo} />
      </Link>

      {/* <GnbTitle>Stein.log</GnbTitle> */}
      <GnbIconGroup>

        <NoStyleA href="https://github.com/steinjun0" target="_blank" rel="noreferrer">
          <GitHubIcon fontSize='large'></GitHubIcon>
        </NoStyleA>

        <NoStyleA href="https://www.instagram.com/junyoungseok/" target="_blank" rel="noreferrer">
          <InstagramIcon fontSize='large'></InstagramIcon>
        </NoStyleA>

      </GnbIconGroup>
    </GnbCommon>
  );
}
export default Gnb;
