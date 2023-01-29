import React from "react";
import styled from "styled-components";
import { Flex, font1, font2, font3, green } from "./Common";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import coding from '../Image/coding.png'

const HomePage = styled.section`
  width: 100%;
  height: 58rem;
  background-color: #000000f6;
  display: flex;
  @media (max-width:620px){
    height: 85rem;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;
const Left = styled.div`
  width: 55%;
  padding: 10rem;
  padding-right: 1rem;
  /* border:1px solid red; */
  @media (max-width:620px){
    width: 90%;
    padding: 3rem;
    padding-top: 1rem;
  /* padding-right: 1rem; */
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
const H4 = styled.h4`
  color: white;
  font-family: ${font1};
  font-size: 1.8rem;
`;
const Bio = styled.p`
  color: white;
  font-family: ${font3};
  font-size: 1.85rem;
`;
const Button = styled.button`
  color: white;
  background-color: ${green};
  border-radius: 1rem;
  font-family: ${font2};
  font-size: 2rem;
  padding: 0.8rem 1.7rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: rgba(5, 143, 97, 0.767);
    transform: scale(1.03);
  }
  &:active {
    transform: scale(.9);
  }
`;
const Follow = styled(Flex)`
  width: 50%;
  align-items: flex-start;
  justify-content: space-between;
  color: white;
  font-family: ${font3};
  font-size: 1.7rem;
  @media (max-width:620px){
    width: 65%;
    /* margin: auto; */
    justify-content: space-around;
  }
`;
const Span = styled.span`
  color: white;
  font-family: ${font2};
  font-size: 2.6rem;
`;
const Anchor = styled.a`
  color: ${green};
  font-size: 3rem;
`;
const Right = styled(Flex)`
  justify-content: center;
  width:45%;
  /* border: 1px solid green; */
  @media (max-width:620px){
    width: 100%;
    height:48%;
  }
`;
const Image = styled.img`
  width: 95%;
  height: 100%;
  @media (max-width:620px){
    width: 60%;
    height:100%;
    /* border:1px solid  red; */
  }
`

const Home = () => {
  return (
    <HomePage id="home">
      <Left data-aos='zoom-in-up'>
        <H3>
          Hello, <span style={{ color: green }}>I'm</span>
        </H3>
        <br />
        <H2>GAURAV MAURYA</H2>
        <H4>Frontend Developer and Python Programmer</H4>
        <br />
        <Bio>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga est
          placeat culpa maxime quisquam voluptate? Dolorum ratione
          exercitationem ipsa, officiis cum illo quidem. Sapiente, magni! Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Nam id, tenetur
          exercitationem tempora maiores corporis itaque reprehenderit veniam
          harum non.
        </Bio>
        <br />
        <Button>Hire Me</Button>
        <br /><br /><br />
        <Follow>
        <Span>Follow me on </Span>
          <Anchor
            target="_blank"
            href="https://www.linkedin.com/in/gaurav-maurya-49b6a9229/"
          >
            <BsLinkedin />
          </Anchor>
          <Anchor
            target="_blank"
            href="https://www.instagram.com/gaurav_as_gm/"
          >
            <BsInstagram />
          </Anchor>
          <Anchor target="_blank" href="https://github.com/gm17314">
            <BsGithub />
          </Anchor>
        </Follow>

      </Left>
      <Right data-aos='zoom-in-up'>
        <Image src={coding} />
      </Right>
    </HomePage>
  );
};

export default Home;
