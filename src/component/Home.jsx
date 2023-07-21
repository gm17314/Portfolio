import React from "react";
import styled from "styled-components";
import { Flex, font1, font2, font3, green } from "./Common";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import coding from "../Image/coding.png";
import resume from "../Image/GauravMaurya_Resume.pdf";

const HomePage = styled.section`
  width: 100%;
  height: 58rem;
  background-color: #000000f6;
  display: flex;
  position: relative;

  @media (min-width: 1420px) {
    height: 63rem;
  }

  @media (max-width: 620px) {
    height: 90rem;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

const Dabba = styled.div`
  position: absolute;
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  left: 15%;
  top: 6%;
  @media (max-width: 620px) {
    left: 26%;
    top: 8%;
  }
  background: radial-gradient(
    circle,
    rgba(2, 150, 76, 0.719) 5%,
    #00000011 38%
  );
`;

const Left = styled.div`
  width: 55%;
  padding: 10rem;
  padding-left: 4rem;
  @media (max-width: 620px) {
    width: 90%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const H3 = styled.h3`
  color: white;
  font-family: ${font1};
  font-size: 3rem;
`;
const H2 = styled.h2`
  color: ${green};
  font-family: ${font1};
  font-size: 3.5rem;
`;
const Bio = styled.p`
  color: white;
  font-family: ${font3};
  font-size: 2.3rem;
  font-weight: bold;
  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    & .sme {
      position: absolute;
      top: 50%;
    }
  }
`;
const Button = styled.a`
  color: white;
  background-color: ${green};
  border-radius: 0.3rem;
  font-family: ${font2};
  font-size: 2rem;
  padding: 0.8rem 1.7rem;
  cursor: pointer;
  transition: all 0.5s;
  position: relative;
  z-index: 5;
  &::after {
    position: absolute;
    border-radius: inherit;
    transition: all 0.2s;
    z-index: -1;
    content: "";
    width: 100%;
    height: 0%;
    top: 0%;
    left: 0;
    background-color: rgba(130, 223, 192, 0.767);
  }
  &:hover::after {
    z-index: -1;
    height: 100%;
    /* transform: scale(1.03); */
  }
  &:hover {
    color: black;
    z-index: 5;
  }
  &:active {
    transform: scale(0.9);
  }
`;
const Follow = styled(Flex)`
  width: 30%;
  align-items: flex-start;
  justify-content: space-between;
  color: white;
  font-family: ${font3};
  font-size: 1.7rem;
  @media (max-width: 920px) {
    width: 35%;
  }
`;
/* const Span = styled.span`
  color: white;
  font-family: ${font2};
  font-size: 2.6rem;
`; */
const Anchor = styled.a`
  color: ${green};
  font-size: 3rem;
  &.linkdn {
    animation: floating 2.8s ease-in 1ms infinite reverse;
  }
  &.ig {
    animation: floating 3s ease-in-out 1ms infinite reverse;
  }
  &.git {
    animation: floating 3.2s ease-in 1ms infinite reverse;
  }
  @keyframes floating {
    0% {
      transform: translateY(1rem);
    }
    50% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(1rem);
    }
  }
`;
const Right = styled(Flex)`
  justify-content: center;
  width: 45%;
  /* border: 1px solid green; */
  @media (max-width: 620px) {
    width: 100%;
    height: 53%;
  }
`;
const Image = styled.img`
  width: 95%;
  height: 100%;
  @media (max-width: 620px) {
    width: 65%;
    height: 100%;
    /* border:1px solid  red; */
  }
`;

const Home = () => {
  return (
    <HomePage id="home">
      <Dabba></Dabba>
      <Left data-aos="zoom-in-up">
        <H3>Hello, I'm</H3>
        <H2>GAURAV MAURYA</H2>
        <br />

        <Bio>
          Computer Science Student at Niet Gr.Noida <br />
          <b style={{ color: green }}> & </b> <br />
          <b className="sme">Subject Matter Expert at Chegg India </b>
        </Bio>
        <br />

        <br />
        <Button href={resume} target="_blank" attributes-list>
          Hire Me
        </Button>
        <br />
        <br />
        <br />
        <Follow>
          <Anchor
            className="linkdn"
            target="_blank"
            href="https://www.linkedin.com/in/gaurav-maurya-49b6a9229/"
          >
            <BsLinkedin />
          </Anchor>
          <Anchor
            className="ig"
            target="_blank"
            href="mailto:gm20february2002@gmail.com"
          >
            <SiGmail />
          </Anchor>
          <Anchor
            className="git"
            target="_blank"
            href="https://github.com/gm17314"
          >
            <BsGithub />
          </Anchor>
        </Follow>
      </Left>
      <Right data-aos="zoom-in-up">
        <Image src={coding} />
      </Right>
    </HomePage>
  );
};

export default Home;
