import Image from "next/image";

import {
  StyledCardContainer,
  StyledCardImgContainer,
  StyledCardTextContainer,
  StyledCardTitle,
  StyledCardDesc,
} from "./elements";

export const Card = ({ agencySelection, ...props }) => {
  return (
    <StyledCardContainer width={agencySelection.width}>
      <StyledCardImgContainer>
        <Image
          layout="responsive"
          src={agencySelection.miniImg.src}
          alt={agencySelection.miniImg.alt}
          width={agencySelection.miniImg.width}
          height={agencySelection.miniImg.height}
        />
      </StyledCardImgContainer>
      <StyledCardTextContainer>
        <StyledCardTitle>{agencySelection.selectionTitle}</StyledCardTitle>
        <StyledCardDesc>{agencySelection.selectionDesc}</StyledCardDesc>
      </StyledCardTextContainer>
    </StyledCardContainer>
  );
};
