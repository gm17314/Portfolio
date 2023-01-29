import React from 'react'
import styled from 'styled-components'
import { Flex, font1, font2,green } from './Common';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt,FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { DiFirebase } from 'react-icons/di';
import { TbBrandPython } from 'react-icons/tb';

const Skill = styled.section`
    width: 100%;
    height:65rem;
    background-color: #000000ef;
    box-shadow: 0 .2rem .5rem .1rem black;
    /* border:1px solid green; */
    @media (max-width:620px){
        height:88rem;
}
`
const H2 = styled.h2`
  color: white;
  font-family: ${font1};
  font-size: 3.5rem;
  text-align: center;
  color:${green};
  padding-top: 4rem;
  margin-bottom: 4rem;
  /* font-variant: small-caps; */
`;
const Cardbox = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    width:85%;
    margin: auto;
    /* border: 1px solid grey; */
    @media (max-width:620px){
        grid-template-columns: auto auto;
}
`
const Card = styled(Flex)`
    width:95%;
    height:20rem;
    margin:2rem;
    /* border: 1px solid red; */
    flex-direction: column;
`
const Image = styled.div`
    font-size: 10rem;
    /* box-shadow: -.1rem -.1rem .5rem .1rem; */
`
const H3 = styled.h3`
  color: white;
  font-family: ${font2};
  font-size: 3rem;
  text-align: center;
  margin-top: -2.5rem;
`;
const Bar1 = styled.div`
    margin:1rem;
    width:80%;
    height:1.3rem;
    background-color: #0f0605;
    border-radius:2rem;
    position: relative;
    &::before{
        content:"";
        position: absolute;
        left:0;
        width:80%;
        height: 100%;
        background-color:#ff5e00;
        border-radius: inherit;
    }
    &::after{
        content: "80%";
        position: absolute;
        color:#ff5e00;
        font-family:${font2};
        letter-spacing:.05rem;
        font-weight: bold;
        font-size:1.1rem;
        top:0%;
        /* bottom:0%; */
        right:2%;
    }
`;

const Bar2 = styled.div`
    margin:1rem;
    width:80%;
    height:1.3rem;
    background-color: #0f0605;
    border-radius:2rem;
    position: relative;
    &::before{
        content:"";
        position: absolute;
        left:0;
        width:70%;
        height: 100%;
        background-color:#0b08bb;
        border-radius: inherit;
    }
    &::after{
        content: "70%";
        position: absolute;
        color:#0b08bb;
        font-family:${font2};
        letter-spacing:.05rem;
        font-weight: bold;
        font-size:1.1rem;
        top:0%;
        /* bottom:0%; */
        right:2%;
    }
`;
const Bar3 = styled.div`
    margin:1rem;
    width:60%;
    height:1.3rem;
    background-color: #0f0605;
    border-radius:2rem;
    position: relative;
    &::before{
        content:"";
        position: absolute;
        left:0;
        width:60%;
        height: 100%;
        background-color:#ffee06;
        border-radius: inherit;
    }
    &::after{
        content: "60%";
        position: absolute;
        color:#ffee06;
        font-family:${font2};
        letter-spacing:.05rem;
        font-weight: bold;
        font-size:1.1rem;
        top:0%;
        /* bottom:0%; */
        right:2%;
    }
`;
const Bar4 = styled.div`
    margin:1rem;
    width:70%;
    height:1.3rem;
    background-color: #0f0605;
    border-radius:2rem;
    position: relative;
    &::before{
        content:"";
        position: absolute;
        left:0;
        width:75%;
        height: 100%;
        background-color:#15edf5;
        border-radius: inherit;
    }
    &::after{
        content: "75%";
        position: absolute;
        color:#15edf5;
        font-family:${font2};
        letter-spacing:.05rem;
        font-weight: bold;
        font-size:1.1rem;
        top:0%;
        /* bottom:0%; */
        right:2%;
    }
`;
const Bar5 = styled.div`
    margin:1rem;
    width:55%;
    height:1.3rem;
    background-color: #0f0605;
    border-radius:2rem;
    position: relative;
    &::before{
        content:"";
        position: absolute;
        left:0;
        width:60%;
        height: 100%;
        background-color:orange;
        border-radius: inherit;
    }
    &::after{
        content: "60%";
        position: absolute;
        color:orange;
        font-family:${font2};
        letter-spacing:.05rem;
        font-weight: bold;
        font-size:1.1rem;
        top:0%;
        /* bottom:0%; */
        right:2%;
    }
`;
const Bar6 = styled.div`
    margin:1rem;
    width:75%;
    height:1.3rem;
    background-color: #0f0605;
    border-radius:2rem;
    position: relative;
    &::before{
        content:"";
        position: absolute;
        left:0;
        width:80%;
        height: 100%;
        background-color:#0a72ad;
        border-radius: inherit;
    }
    &::after{
        content: "80%";
        position: absolute;
        color:#0a72ad;
        font-family:${font2};
        letter-spacing:.05rem;
        font-weight: bold;
        font-size:1.1rem;
        top:0%;
        /* bottom:0%; */
        right:2%;
    }
`;

const Skills = () => {
  return (
    <Skill id="skill">
      <H2>My Skills</H2>
      <Cardbox>
        <Card data-aos='zoom-in' data-aos-delay='300'>
            <Image style={{color:'#ff5e00'}}><AiFillHtml5/></Image>
            <H3>HTML</H3>
            <Bar1></Bar1>
        </Card>
        <Card  data-aos='zoom-in' data-aos-delay='300'>
            <Image style={{color:'#0b08bb'}}><FaCss3Alt/></Image>
            <H3>CSS</H3>
            <Bar2></Bar2>
        </Card>
        <Card  data-aos='zoom-in' data-aos-delay='300'>
            <Image style={{color:'#ffee06'}}><SiJavascript/></Image>
            <H3>JAVASCRIPT</H3>
            <Bar3></Bar3>
        </Card>
        <Card  data-aos='zoom-in' data-aos-delay='300'>
            <Image style={{color:'#15edf5'}}><FaReact/></Image>
            <H3>REACT JS</H3>
            <Bar4></Bar4>
        </Card>
        <Card  data-aos='zoom-in' data-aos-delay='300'>
            <Image style={{color:'orange'}}><DiFirebase/></Image>
            <H3>FIREBASE</H3>
            <Bar5></Bar5>
        </Card>
        <Card  data-aos='zoom-in' data-aos-delay='300'>
            <Image style={{color:'#0a72ad'}}><TbBrandPython/></Image>
            <H3>PYTHON</H3>
            <Bar6></Bar6>
        </Card>
      </Cardbox>
    </Skill>
  )
}

export default Skills
