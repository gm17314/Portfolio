import React from 'react'
import styled from 'styled-components'
import { Flex, font1, font2, green } from './Common';
import connectbees from '../Image/connectbees.PNG'
import labpartner from '../Image/labpartner.PNG'
import blogspedia from '../Image/blogspedia.PNG'
import yourvdeos from '../Image/yourvdeos.PNG'

const Project = styled.section`
    width:100%;
    height:85rem;
    /* border:1px solid green; */
    background-color: #000000f6;
    @media (max-width:620px){
      height:240rem;
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
    font-size: 4.5rem;
   margin-bottom:2rem; 
  }
  /* font-variant: small-caps; */
`;
const Main = styled.div`
    display: grid;
    grid-row-gap: 6rem;
    grid-template-columns: auto auto;
    justify-items: center;
    @media (max-width:620px){
      grid-template-columns: auto;
      overflow: hidden;
  }
`
const Box = styled(Flex)`
    flex-direction: column;
    width: 50%;
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
      height:40rem;
  }
`;
const H4 = styled.a`
  text-decoration: none;
  color: white;
  font-family: ${font2};
  font-weight: bold;
  font-size: 2.5rem;
  margin-top:2rem;
  transition: all .5s;
  &:hover{color:lightgreen;transform:scale(1.05);}
  @media (max-width:620px){
    font-size: 3.5rem;
   margin-top :1rem ;
  }
`;
const Projects = () => {
  return (
    <Project id="project">
      <H3>Projects</H3>
      <Main>
        <Box data-aos='fade-right'>
          <Card href='https://yourvdeos.web.app/' target='_blank'><img alt='' src={yourvdeos} width={'100%'} height={'100%'} /></Card>
          <H4 href='https://github.com/gm17314/yourvdeos' target='_blank'>YourVdeos</H4>
        </Box>
        <Box data-aos='fade-left'>
          <Card href='https://lab-partner.web.app/' target='_blank'><img alt='' src={labpartner} width={'100%'} height={'100%'} /></Card>
          <H4 href='https://lab-partner.web.app/' target='_blank'>Lab Partner</H4>
        </Box>
        <Box data-aos='fade-right'>
          <Card href='https://blogs-pedia.web.app/' target='_blank'><img alt='' src={blogspedia} width={'100%'} height={'100%'} /></Card>
          <H4 href='https://github.com/gm17314/blogs-pedia' target='_blank'>BlogsPedia</H4>
        </Box>
        <Box data-aos='fade-left'>
          <Card href='https://gm17314.github.io/ConnectBees/' target='_blank'><img alt='' src={connectbees} width={'100%'} height={'100%'} /></Card>
          <H4 href='https://github.com/gm17314/ConnectBees' target='_blank'>ConnectBees Landing Page</H4>
        </Box>
      </Main>
    </Project>
  )
}

export default Projects
