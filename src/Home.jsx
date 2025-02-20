import { Box, Button, Center, Flex, Heading, Input, Spinner, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import styled from "styled-components"
import ShayriCard from './ShayriCard'
import axios from "axios"

const Container=styled.div`
width: 100%;
height:650px;
  background-color: pink;
`
const Home = () => {
  const [word,setword]=useState("")
  const [data,setData]= useState("")
  const [load,setLoad]= useState(false)
  
  const handleclick=()=>{
    console.log(word);
    fetchData()
  }
  const fetchData=()=>{
    setLoad(true)
    axios.get(`https://shayribackend.onrender.com/shayri/${word}`).then((res)=>{
      console.log(res.data)
      setData(res.data.shayri.message.content);
      setLoad(false)
    }).catch((err)=>{
      console.log(err);
      setLoad(false)
    })
  }
  return (
    <Stack>
      <Box w="100%" h="750px" bgGradient="linear(to-r, blue.900, pink.900)">
        <Box
          w="70%"
          margin={"auto"}
          h="750px"
          bgGradient="linear(to-r, blue.300, pink.500)"
        >
          <Heading padding={5} color={"white"} fontFamily={'Croissant One'}>
            Shayari Generator
          </Heading>
          <Flex paddingLeft={20} paddingRight={20}>
            <Input placeholder="Generate a Shayari..." onChange={(e)=>setword(e.target.value)} ></Input>{" "}
            <Button backgroundColor={"blue.400"} color={"white"} onClick={handleclick}>
              {" "}
              Go!
            </Button>
          </Flex>
          <Center>
      <Text color={'white'} fontFamily={'Croissant One'} padding={20} fontSize={20}>
     {load?<Spinner color='pink.300' size={'xl'}/>:data}
      </Text>
        </Center>
        </Box>
      </Box>
    </Stack>
  );
}
//https://kulsoom-shayri-app.netlify.app/

export default Home