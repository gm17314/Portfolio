import React from 'react'
import styled from 'styled-components'
import { Flex, font1, font2, green } from './Common';
import connectbees from '../Image/connectbees.PNG'
import labpartner from '../Image/labpartner.PNG'
import blogspedia from '../Image/blogspedia.PNG'

const Project = styled.section`
    width:100%;
    height:55rem;
    /* border:1px solid green; */
    background-color: #000000f6;
    @media (max-width:620px){
      height:125rem;
  }
`
const H3 = styled.h3`
  color:${green};
  font-family: ${font1};
  font-size: 3.5rem;
  text-align: center;
  padding-top: 3.5rem;
  margin-bottom: 5rem;
  @media (max-width:620px){
   margin-bottom:2rem; 
  }
  /* font-variant: small-caps; */
`;
const Main = styled(Flex)`
    margin: auto;
    justify-content: space-between;
    width: 80%;
    @media (max-width:620px){
      flex-direction: column;
      overflow: hidden;
  }
`
const Box = styled(Flex)`
    flex-direction: column;
    width: 30%;
    @media (max-width:620px){
      width:75%;
      margin:3rem;
  }
`
const Card = styled.a`
    width: 100%;
    height: 25rem;
    /* border: 1px solid grey; */
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 0 2rem .1rem #1b1b1b;
    & img{
    transition:transform 1s;}
    & img:hover{transform:scale(1.1);transition:transform 1s;}
    @media (max-width:620px){
      height:27rem;
  }
`;
const H4 = styled.a`
  text-decoration: none;
  color: white;
  font-family: ${font2};
  font-weight: bold;
  font-size: 2.5rem;
  margin-top:3rem;
  transition: all .5s;
  &:hover{color:lightgreen;transform:scale(1.05);}
  @media (max-width:620px){
   margin-top :1rem ;
  }
`;
const Projects = () => {
  return (
    <Project id="project">
        <H3>Projects</H3>
        <Main>
            <Box data-aos='fade-right'>
            <Card href='https://gm17314.github.io/ConnectBees/' target='_blank'><img alt='' src={connectbees} width={'100%'} height={'100%'} /></Card>
            <H4 href='https://gm17314.github.io/ConnectBees/' target='_blank'>ConnectBees Landing Page</H4>
            </Box>
            <Box data-aos='zoom-in'>
            <Card href='https://lab-partner.web.app/' target='_blank'><img alt='' src={labpartner} width={'100%'} height={'100%'} /></Card>
            <H4 href='https://lab-partner.web.app/' target='_blank'>Lab Partner</H4>
            </Box>
            <Box data-aos='fade-left'>
            <Card href='https://blogs-pedia.web.app/' target='_blank'><img alt='' src={blogspedia} width={'100%'} height={'100%'} /></Card>
            <H4 href='https://blogs-pedia.web.app/' target='_blank'>BlogsPedia</H4>
            </Box>
        </Main>
    </Project>
  )
}

export default Projects
