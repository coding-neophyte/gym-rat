import React from 'react';
import { Box } from '@mui/material';
import SearchWorkouts from '../components/SearchWorkouts';
import HomeBanner from '../components/HomeBanner';
import Workouts from '../components/Workouts';

const Home = () => {
  return (
    <Box>
      <HomeBanner />
      <SearchWorkouts />
      <Workouts />
    </Box>
  );
};

export default Home;
