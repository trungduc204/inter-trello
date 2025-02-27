import Box from "@mui/material/Box";
import theme from "../../../theme";
import { Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import Avatars from "../../../components/Board_Bar/Avatars/avatars";

function index() {
  return (
    <Box
      sx={{
        // backgroundColor: 'primary.dark',
        width: "100%",
        height: theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflow: "auto",
        borderTop: "1px solid #95afc0",
      }}
    >
      <Box
        px={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Hello Word!
        </Typography>
        <StarIcon />
        <Button variant="outlined" startIcon={<PeopleAltIcon />}>
          Private
        </Button>
        <Button
          variant="outlined"
          startIcon={
            <LeaderboardIcon
              sx={{
                transform: "rotate(180deg)",
              }}
            />
          }
        >
          Board
        </Button>
      </Box>
      //
      <Box
        px={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        < Avatars />
      </Box>
    </Box>
  );
}

export default index;
