import React from 'react';
// import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));





export const Top = () => {

  const [data, setdata] = useState("")
  const fetch_data = async () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=241c18a333fe43dcb64109d1fb869ce2")
      .then((res) => {
        setdata(res.data.articles)
      })
      .catch(err => console.log(err))
  }
  console.log(data)
  // const passdata = async ()=>{

  // }

  // useEffect(() => {
  //   fetch_data()
  // }, [])
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >

            </IconButton>
            <Button size="large" variant="contained" sx={{ color: 'white' }} onClick={fetch_data}>
              Top News
            </Button>
            <Button size="large" variant="contained" sx={{ color: 'white' }}>
              Categories
            </Button>


            <Search>
              <SearchIconWrapper>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <div className='right_side'>
              <Button size="large" variant="contained" sx={{ color: 'white' }} className='b1'>
                GB
              </Button>
              <Button size="large" variant="contained" sx={{ color: 'white' }} onClick={fetch_data}>
                US
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      {data && data.map((element, index) => {
        return (
          <>
            <Card key={index} sx={{ maxWidth: 345, display: 'inline-block', margin: '40px' }}

            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '20px', fontFamily: 'sans-serif' }}>
                    {element.title}
                  </Typography>
                  <CardMedia
                    component="img"
                    height="140"
                    image={element.urlToImage}
                    alt="green iguana"
                  />
                  <Typography variant="body2" color="text.secondary">
                    {element.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  More
                </Button>
              </CardActions>
            </Card>

          </>
        )
      })}

    </>

  )
}

