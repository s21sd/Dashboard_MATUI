import Sidebar from './Components/Sidebar'
import Rightbar from './Components/Rightbar'
import Navbar from './Components/Navbar'
import { Box, Container, Stack } from '@mui/material'
function App() {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" spacing={2}>

        <Sidebar />
        <Navbar />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App
