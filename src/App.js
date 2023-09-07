import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import WorkoutDetail from './pages/WorkoutDetail';
import Home from './pages/Home';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/workout/:id',
    element: <WorkoutDetail />
  }
])

function App() {
  return(
    //setting width and margin for large screens
    <Box width='400px' sx={{width: {xl: '1488px'}}} m='auto'>
      <NavBar />
      <RouterProvider router={router}/>
      <Footer />
    </Box>

  )

}

export default App;
