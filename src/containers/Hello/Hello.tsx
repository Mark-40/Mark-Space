import { FC } from "react";

import Text from "components/Text";
import Link from "components/Link";
import { SOCIAL_LINKS } from "./constants";
import * as S from "./styles";

const Hello: FC = () => (
  <S.Wrapper>
    <S.Avatar />
    <Text weight="bold" size="h1" block>
      Hi, I'm Mark 👋
    </Text>
    <S.CVBtn href="/Mark_Manzanilla_CV_2026.pdf" target="_blank">
      Download CV
    </S.CVBtn>
    <Text lineHeight="30px" block>
      I'm an engineering leader from the{" "}
      <Link href="https://en.wikipedia.org/wiki/Philippines" target="_blank">
        Philippines
      </Link>
      , currently serving as <strong>Head of Plus</strong> at Wellevate —
      leading a business unit focused on solving complex operational problems
      through custom software, automation, and AI-powered solutions.
      <br />
      <br />
      With 6+ years of experience building scalable applications, I specialize
      in full-stack engineering, DevOps, and solution architecture. I've worked
      across industries — from enterprise desktop apps at Brother Philippines,
      to backend services at Pru Life UK., to leading development teams at
      Wellevate. During my university years at{" "}
      <Link href="https://lpu.edu.ph" target="_blank">
        Lyceum of the Philippines – Laguna
      </Link>
      
      , a Best Thesis Awardee, and a Microsoft Imagine Cup participant.
      <br />
      <br />
      I enjoy translating complex business requirements into high-impact
      technical products — building systems that integrate AI, eliminate manual
      workflows, and drive real results.
    </Text>
    <S.SocialLinks>
      {SOCIAL_LINKS.map(({ id, icon, link, name }) => (
        <Link href={link} title={name} target="_blank" key={id}>
          {icon}
        </Link>
      ))}
    </S.SocialLinks>
  </S.Wrapper>
);

export default Hello;
