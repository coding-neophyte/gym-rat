import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import WorkoutDetail from './pages/WorkoutDetail';
import Home from './pages/Home';

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
    <Box width='400px'>
      <NavBar />
      <RouterProvider router={router}/>
    </Box>

  )

}

export default App;
