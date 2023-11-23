import React from 'react'
import Layout from '../components/Layout';
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography} from '@mui/material';
import { MenuList } from '../data/Data';

const Menu = () => {
  return (
    <Layout>
        <Box sx={{display: 'flex', flexWrap:"wrap", justifyContent: 'center'}}>
        {
          MenuList.map((menu) => (
            <Card sx={{maxWidth: '390px', m:2}}>
              <CardActionArea>
                <CardMedia sx= {{height: '350px'}} component={'img'} src={menu.image} alt={menu.name}/>
              </CardActionArea>
              <CardContent>
                <Typography variant='h5' gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">
                  {menu.description}
                </Typography>
                <Typography>
                  {menu.price}
                </Typography>
              </CardContent>
            </Card>
          ))
        }

        </Box>
    </Layout>
  )
}

export default Menu