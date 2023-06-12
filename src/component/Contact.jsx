import React from 'react'
import styled from 'styled-components'
import { Flex, font1,green } from './Common'
import contactus from '../Image/contact.png'
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../FirebaseConfig';

const Main = styled(Flex)`
    justify-content: space-between;
    width:100%;
    height: 63rem;
    background-color: #000000f9;
    padding-top: 2rem;
    position:relative;
    @media (max-width:620px){
   justify-content:flex-end;
  }
`
const Div = styled.div`
  background-color: #000000f9;
`
const Left = styled(Flex)`
    width:50%;
    height:100%;
    @media (max-width:620px){
      display: none;
  }
`
const Image = styled.img`
    width: 90%;
    height:90%;
`
const Right = styled.form`
    width:45%;
    height:80%;
    /* border:1px solid red; */
    @media (max-width:620px){
      width:83%;
  }
`
const Heading = styled.h2`
  font-family: ${font1};
  font-size: 3.5rem;
  text-align: center;
  color:${green};
  background-color: #000000f9;
  padding-top: 4rem;
  /* font-variant: small-caps; */
`;

const Label = styled.label`
  color: ${green};
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 2.6rem;
`
const Input = styled.input`
   font-size:2rem;
   font-family: ${font1};
   width:80%;
   border:0;
   outline:0;
   color:white;
   padding-top:1rem;
   background-color: inherit;
   border-bottom: 1.5px solid ${green};
`
const Message = styled.textarea`
   font-size:2rem;
   font-family: ${font1};
   min-width:80%;
   max-width: 80%;
   min-height: 40%;
   max-height: 40%;
   outline:0;
   color:white;
   padding:.4rem;
   background-color: inherit;
   border-radius:.5rem;
   border: 1px solid ${green};
`
const Arrow = styled.div`
  font-size: 4.5rem;
  position:absolute;
  bottom:4%;
  right:1%;
  color:${green};
  cursor:pointer;
`
const Button = styled.button`
  font-size: 2.2rem;
  font-family: ${font1};
  border-radius: .5rem;
  color:${green};
  border:1px solid ${green};
  background-color: inherit;
  cursor:pointer;
  padding:.3rem .8rem;
  transition:all .5s;
  &:hover{transform:scale(1.05);}
  &:active{transform:scale(.9);}
  @media (max-width:620px){
    margin: auto;
  }

`
const Contact = () => {
  const collectionRef = collection(db,"Contact")
  const handleData=async(e)=>{
    e.preventDefault()
    var name = e.target[0].value; 
  var email = e.target[1].value; 
  var message = e.target[2].value;

  await addDoc(collectionRef,{Name:name,Email:email,Message:message});
  e.target[0].value="";
  e.target[1].value="";
  e.target[2].value="";
  alert("Thanks for Contacting us🙏")
  }
   
  return (
    <Div>
      <Heading>Feel Free To Connect🙏</Heading>
    <Main id="contact">
        <Left><Image src={contactus} alt=''/></Left>
        <Right onSubmit={handleData}>
        <Label>Name :</Label><br />
            <Input type="text" /><br /><br /><br />

            <Label>Email :</Label><br />
            <Input type="email" /><br /><br /><br />

            <Label>Message👇</Label><br /><br />
            <Message type="text" /><br /><br /><br />
            <Button>Send</Button>
        </Right>
        <Arrow onClick={()=>(window.scrollTo(0,0))}><BsArrowUpCircleFill/></Arrow>
    </Main>
    </Div>
  )
}

export default Contact
