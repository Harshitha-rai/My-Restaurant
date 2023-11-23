import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box
        sx={{
          my:15,
          textAlign:"center",
          p:2,
          "& h4": {
            fontWeight: "bold",
            my:2,
            fontSize:"2rem"
          },
          "& p": {
            textAlign: "justify"
          },
          "@media (max-width:600px)": {
            mt:0,
            "& h4": {
              fontSize: "1.5rem"
            }
          }
        }}>
          <Typography variant="h4">
            Welcome to my Resturant
          </Typography>
          <p>Food is something that transcends time and space and even has the power to remind you of the past. There are many people, from celebrities to politicians, who come back to Mangalore just to remind themselves of their past by visiting their old hangouts and eating Mangalorean food. Mangalore cuisine is unique as there are many communities that call this coastal city home. Apart from Udupi, this is the only city where you will get to eat traditional Konkani, GSB, and Tuluva foods. Many people who have visited Mangalore have fallen in love with the food and crave another taste long after they have returned. </p>

          <br />

          <p>Not all Mangalore dishes are easy to make as some require a certain knack or knowledge that comes from living in Mangalore and being part of its culture for years. However, this hasn’t stopped many from trying. Not many have succeeded, as the same taste cannot be replicated in other places. This probably has something to do with the fact that the ingredients used in traditional Mangalore cooking may not always be available, or may not be of good quality when available. Many Mangaloreans no longer know how to prepare traditional Mangalorean food, which is a sad truth, but those with knowledge and ability are always open to sharing with others.</p>

        </Box>
    </Layout>
  )
}

export default About