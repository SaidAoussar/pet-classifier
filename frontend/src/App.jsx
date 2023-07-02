import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';




import NavBar from './components/nav-bar';
import UploadImg from './components/upload-img';
import { Card } from '@mui/material';

function App() {
  const [count,setCount] = useState(0)

  return (
    <>
      <Box>
        <NavBar />
      </Box>
      <Box>
        <Toolbar />
        <UploadImg />
      </Box >
    </>
  )
}

export default App
