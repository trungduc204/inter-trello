import Box from '@mui/material/Box'
import theme from '../../../theme'

function BoardContent() {
  return (
    <div>
         <Box sx={{
            
                width: '100%',
                height: `calc(100vh - ${theme.trello.appBarHeight} + ${theme.trello.boardBarHeight})`,
                display: 'flex',
                alignItems: 'center'

            }}>
                Board Content
            </Box>
    </div>
  )
}

export default BoardContent