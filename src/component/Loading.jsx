import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Circle } from 'rc-progress' 
import { Flex,} from './Common'

const Load = styled(Flex)`
    width:100%;
    height:100vh;
    justify-content: center;
    background-color: #131212;
`
const Div  = styled.div`
    width:40rem;
    height:40rem;
`
const Span = styled.span`
    font-family: "Gabriela";
    color: #02bb02;
    font-size: 16rem;
    font-weight: bold;
    position: relative;
    bottom: 76%;
    left: 17%;
    border-radius: 50%;
    background-color: #043a04;
    box-shadow: 0 0 8rem 0.5rem green;
`
const Loading = () => {
    const [percent,setPercent] = useState(0);
    const increment=()=>{
        setPercent(percent+.5)
    }
      useEffect(()=>{
        increment()
        // eslint-disable-next-line 
    })
  return (
    <Load>
        <Div>
        <Circle percent={percent} strokeWidth={5} strokeColor="#50b850"trailWidth={5} trailColor="#9ac79a">
        </Circle>
        <Span>GM</Span>
        </Div>
    </Load>
  )
}

export default Loading
