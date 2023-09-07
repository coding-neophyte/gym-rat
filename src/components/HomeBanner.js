import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import BannerImg from '../assets/banner.png';

const HomeBanner = () => {
  return (
    <Box
      sx={{ marginTop: { lg: '212px', sm: '70px' }, ml: { sm: '50px' } }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="30px">
        Gym Rat
      </Typography>
      <Typography
        fontWeight="700px"
        sx={{ fontSize: { lg: '44px', sm: '40px' } }}
        mb={5}
      >
        Work Hard <br />& Repeat
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="35px"
        marginBottom="6px"
        fontWeight={200}
      >
        The Workout Encyclopedia
      </Typography>
      <Button
        variant="contained"
        href="#workouts"
        color="error"
        mb={4}
        sx={{ backgroundColor: '#ff2625', padding: '10px' }}
      >
        Browse Workouts
      </Button>
      <Typography
        fontWeight={600}
        color={'#ff2625'}
        sx={{ opacity: 0.1, display: { lg: 'block', sm: 'none' } }}
        fontSize={200}
      >
        Gym Rat
      </Typography>
      <img src={BannerImg} alt="banner" className="banner" />
    </Box>
  );
};

export default HomeBanner;
