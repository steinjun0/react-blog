import { Link } from "react-router-dom";
import { Button, styled } from "@mui/material";

// color
export const colorCareerDiveBlue = "#698CFF";
export const colorCareerDivePink = "#E25D7D";
export const colorBlueGray = '#CFD6E0';
export const colorTextLight = "#898989";
export const colorTextBody = "#4F4F4F";
export const colorBackgroundGrayLight = "#F8F8F8";
export const colorBackgroundGrayDark = "#E6E6E6";

// text
export const TextBody1 = styled(`span`)`
  font-size: 16px;
  line-height: 24px;
`;

export const TextBody2 = styled(`span`)`
  font-size: 14px;
  line-height: 24px;
`;

export const TextSubtitle1 = styled(`span`)`
  font-weight: 700;
  line-height: 24px;
`;

export const TextSubtitle2 = styled(`span`)`
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
`;

export const TextHeading6 = styled(`span`)`
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
`;

// container
export const Flex = styled("div")`
  display: flex;
`;

export const VerticalFlex = styled(Flex)`
  flex-direction: column;
`;

export const VerticalCenterAlignFlex = styled(Flex)`
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const FullWidthWrapper = styled(VerticalFlex)`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CircleImg = styled("img")`
  border-radius: 50%;
`;

export const GrayBackground = styled(Flex)`
  background-color: #f8f8f8;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const MaxWidthDiv = styled(Flex)`
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
`;

export const LinkNoDeco = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const UlNoDeco = styled('ul')`
  list-style: none;
  padding: 0;
`;

export const NoStyleA = styled('a')`
    text-decoration: none;
    color: inherit;
`;

export const NoStyleLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export const UnderlineLink = styled(NoStyleLink)`
    &:hover{
        text-decoration: underline;
    }
`;