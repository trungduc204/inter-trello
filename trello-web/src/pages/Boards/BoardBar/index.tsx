
import Box from '@mui/material/Box'
import theme from '../../../theme'



function index() {
  return (
    
         <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        Board Bar
      </Box>
  )
}

export default index