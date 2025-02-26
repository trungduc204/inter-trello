import Container from '@mui/material/Container'
import { useTheme, Theme } from '@mui/material/styles'
import AppBar from '../../components/AppBar'
import BoardBar from '../../pages/Boards/BoardBar'
import BoardContent from './BoardContent'
function Board() {
    const theme = useTheme() as Theme;
    console.log('theme', theme);
    return (

        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }} >
            <AppBar />
            <BoardBar />
           <BoardContent />
        </Container >

    );
}

export default Board