import React from 'react';
import {Box, Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
    <Box sx= {{textAlign:"center", bgcolor:"#1A1A19", color:'white', p :3 }}>
        <Typography variant="h5" sx={{"&media (max-width:600px)": {
            fontSize:'0.5rem'
            }}}>
            <Box
            sx={{my:3,
            "& svg" : {
                fontSize: '60px',
                cursor:"pointer",
                mr: 2
            },
            "& svg:hover": {
                color:"goldenrod",
                transform:"translateX(5px)",
                transition: "all 400ms"
            }
            }}>
                <InstagramIcon/>
                <GitHubIcon />
                <LinkedInIcon />
            </Box>
            
            All Rights Reserved &copy; Harshitha
        </Typography>
    </Box>
    </>
    
  )
}

export default Footer
