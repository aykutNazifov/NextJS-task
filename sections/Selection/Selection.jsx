import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledCardsContainer,
  StyledTitle,
  StyledDescription,
  StyledContentContainer,
  StyledImageContainer,
} from "./elements";

import { Card } from "../../collections";

export const Selection = ({
  agencySelections,
  image,
  title,
  description,
  ...props
}) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledContentContainer>
        <StyledImageContainer>
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="contain"
          />
        </StyledImageContainer>
        <StyledCardsContainer>
          {agencySelections.map((agencySelection) => (
            <Card agencySelection={agencySelection} />
          ))}
        </StyledCardsContainer>
      </StyledContentContainer>
    </StyledContainer>
  );
};
