import Box from '@mui/material/Box'
import ModeSelect from '../../components/ModelSelect'
// import { useTheme, Theme } from '@mui/material/styles'
import theme from '../../theme'
import AppsIcon from '@mui/icons-material/Apps'
// import SvgIcon from '@mui/material/SvgIcon'
import Icon from '../../component/a'
function AppBar() {
  return (
    <Box sx={{
      width: '100%',
      height: theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'

    }}>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        justifyContent: 'center',
      }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        {/* <SvgIcon component={TrelloIcon} inheritViewBox /> */}
        <Icon></Icon> 
        <p>Trello</p>
        {/* <TrelloIcon></TrelloIcon> */}
      </Box>

      <Box>
        <ModeSelect />
      </Box>
    </Box>

  )
}
export default AppBar