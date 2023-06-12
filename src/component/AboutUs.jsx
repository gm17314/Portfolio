import React from 'react'
import styled from 'styled-components'
import { Flex, font1, font3, green } from './Common'
import dp from '../Image/dp.jpeg'

const About = styled(Flex)`
position: relative;
  justify-content: center;
  width: 100%;
  height: 70rem;
  background-image: linear-gradient(#0e0d0df8,rgba(14, 12, 12, 0.973));
  box-shadow: 0 0 3rem .1rem #161515f8;
  @media (max-width:620px){
   height:110rem; 
  }
`

const Main = styled.div`
    width:88%;
    height:90%;
`

const Container = styled(Flex)`
    width: 100%;
    justify-content: space-between;
    margin-bottom: 7rem;
    /* border: 1px solid green; */
`
const Left = styled.div`
    width: 60%;
    /* border: 1px solid red; */
`
const H3 = styled.h3`
  color: white;
  font-family: ${font1};
  font-size: 3rem;
  font-variant: small-caps;
`;
const H4 = styled.h4`
  color: white;
  font-family: ${font3};
  font-weight: bold;
  font-size: 2.4rem;
`;
const H5 = styled.h4`
  color: white;
  font-weight: bold;
  font-family: ${font3};
  font-size: 2.2rem;
`;
const Image = styled.img`
    width: 36%;
    height: 20rem;
    border-radius:5px;
    box-shadow: 0 0 1rem .3rem #234b2e6c;
`
const Bio = styled(Flex)`
    margin-top:10rem;
    justify-content: space-between;
    width: 100%;
    /* border: 1px solid green; */
    @media (max-width:620px){
      flex-direction: column;
      margin-top:0;
    & .aboutme{text-align:center;margin-top:2rem;margin-bottom:-1rem;}
    }
`
const Dp = styled.img`
    width: 24rem;
    height: 24rem;
    border-radius:50%;
    margin-top: 2rem;
    box-shadow: 0 0 1rem .3rem #01681e6c;
    @media (max-width:620px){
      margin:0;
    }
`
const Div = styled.div`
    width:72%;
    @media (max-width:620px){
      width:111%;
  }
`
const Para = styled.p`
  width: 100%;
  color: #e4f1e2;
  font-family:${font1};
  font-size: 2.2rem;
  line-height: 2.65rem;
  margin-top:1rem;
  @media (max-width:620px){
     text-align: center;
     width: 85%;
     margin:auto;
     line-height: 3rem;
     margin-top:1rem;
    }

`;


const AboutUs = () => {
  return (
    <About id='about'>
      <Main>
        <Container>
          <Left>
            <H3>Who <span style={{ color: green }}>I'm</span></H3><br />
            <H4>I'm pursuing Btech in CSE with specialization in AI and ML at <span style={{ color: green }}>Noida Institute Of Engineering and Technology (2020-24)</span> </H4><br />
            <H5>I use ReactJs as well as Firebase for <span style={{ color: green }}>Web Development</span></H5>
          </Left>
          <Image data-aos='fade-in-right' src='https://images.collegedunia.com/public/college_data/images/campusimage/1415611200n5.jpg' />
        </Container>
        <Bio>
          <Dp data-aos='fade-in-out' src={dp} />
          <Div>
           <H3 className='aboutme'>About <span style={{ color: green }}>Me</span></H3>
            <Para>I've strong interest in Web Development.I am proficient in front-end development and continually strive to learn about new technologies. I have experience using various technologies such as ReactJs, React Redux,Google Firebase, among others, and have a wealth of experience creating projects with them. Along with development, I've good command in Data Structure with Python.
              <br />
              Furthermore, I work as a Subject Matter Expert for Chegg India, where I have assisted many students and developers by answering their questions.My diverse skills and expertise make me an asset to any team, and I am eager to continue growing and developing as a developer.</Para>
          </Div>
        </Bio>
      </Main>
    </About>
  )
}

export default AboutUs
