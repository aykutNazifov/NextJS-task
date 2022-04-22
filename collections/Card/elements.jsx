import styled from "styled-components";

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  padding: 10px 20px;
  width: ${(props) => props.width};
  height: 80px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
  transition: 0.3s all;
  cursor: pointer;

  &:hover {
    border: 1.5px solid #1f7efb;

    h3 {
      color: #1f7efb;
      text-decoration: underline;
    }
  }
`;

export const StyledCardImgContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 100px;
  height: 100%;
  margin-right: 20px;
`;

export const StyledCardTextContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
`;

export const StyledCardTitle = styled((props) => <h3 {...props} />)`
  margin: 0;
  color: black;
  font-size: 16px;
  font-family: Poppins;
`;

export const StyledCardDesc = styled((props) => <p {...props} />)`
  margin: 0;
  color: black;
  font-size: 12px;
  font-family: Poppins;
`;
