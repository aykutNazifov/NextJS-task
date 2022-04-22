import styled from "styled-components";
import {
  Button,
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";

export const StyledContainer = styled(({ ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  @media (max-width: 1024px) {
    height: auto;
    overflow: hidden;
  }
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  font-size: 40px;

  @media (max-width: 1024px) {
    font-size: 25px;
  }
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin-top: -5px;
  margin-bottom: 35px;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledContentContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 410px;
  background-image: url("/img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    flex-wrap: wrap;
    height: auto;
  }
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 300px;
  height: 400px;
  position: relative;
  margin-right: 50px;

  @media (max-width: 1024px) {
    width: 500px;
    height: 400px;
    margin-right: 0;
  }
`;

export const StyledCardsContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 390px;
  height: 100%;

  @media (max-width: 1024px) {
    width: 500px;
    height: 500px;
    align-items: center;
  }
`;
