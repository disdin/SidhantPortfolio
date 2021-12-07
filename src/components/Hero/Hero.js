import React from "react";
import Link from "next/link";
import styled from "styled-components";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const WhiteLink = styled.a`
  color: white;
`;

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I'm a Software Developer based in India. I've built websites, desktop
          applications and corporate software.{" "}
        </SectionText>

        <Button>
          <Link href="#about">
            <WhiteLink>Learn More</WhiteLink>
          </Link>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
