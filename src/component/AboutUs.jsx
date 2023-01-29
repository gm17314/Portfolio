import React from 'react'
import styled from 'styled-components'
import { Flex, font1, font3, green } from './Common'

const About = styled(Flex)`
position: relative;
  justify-content: center;
  width: 100%;
  height: 70rem;
  background-color: #000000fb;
  box-shadow: 0 0 3rem .1rem #161515f8;
  @media (max-width:620px){
   height:100rem; 
  }
`
const Main = styled.div`
    width:83%;
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
    border-radius:40%;
    margin-top: 2rem;
    /* box-shadow: 0 0 1rem .3rem #234b2e6c; */
    @media (max-width:620px){
      margin:0;
      border-radius:45%;
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
  color: #dbf7d7;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 2.2rem;
  line-height: 2.5rem;
  margin-top:1rem;
  

`;


const AboutUs = () => {
  return (
    <About id='about'>
      <Main>
        <Container data-aos='zoom-in'>
          <Left>
            <H3>Who <span style={{ color: green }}>I'm</span></H3><br />
            <H4>I'm a student and I'm pursuing Btech in CSE with specialization in AI and ML at <span style={{ color: green }}>Noida Institute Of Engineering and Technology (NIET)</span> </H4><br />
            <H5>I use ReactJs as well as Firebase for <span style={{ color: green }}>Web Development</span></H5>
          </Left>
          <Image src='https://images.collegedunia.com/public/college_data/images/campusimage/1415611200n5.jpg' />
        </Container>
        <Bio data-aos='zoom-in'>
          <Dp src='https://images.collegedunia.com/public/college_data/images/campusimage/1415611200n5.jpg' />
          <Div>
           <H3 className='aboutme'>About <span style={{ color: green }}>Me</span></H3>
            <Para><i>I've strong interest in Web Development.I am proficient in front-end development and continually strive to learn about new technologies. I have experience using various technologies such as ReactJs, React Redux,Google Firebase, among others, and have a wealth of experience creating projects with them. Along with development, I've good command in Data Structure with Python.
              <br />
              Furthermore, I work as a Subject Matter Expert for Chegg India, where I have assisted many students and developers by answering their questions.My diverse skills and expertise make me an asset to any team, and I am eager to continue growing and developing as a developer.</i> </Para>
          </Div>
        </Bio>
      </Main>
    </About>
  )
}

export default AboutUs
