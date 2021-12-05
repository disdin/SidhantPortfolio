import React from "react";
import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

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
        <Link href="#about">
          <Button>Learn More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
