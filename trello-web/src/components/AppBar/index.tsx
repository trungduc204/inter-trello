import Box from "@mui/material/Box";
import ModeSelect from "../../components/ModelSelect";
import theme from "../../theme";
import AppsIcon from "@mui/icons-material/Apps";
import { IconTrello } from "../Svgr";
import Typography from "@mui/material/Typography";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Templates from "./Menus/Templates";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profile from "./Menus/Profiles";
import Starred from "./Menus/Starred";

function AppBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap:2,
        overflow: 'auto'
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
        <AppsIcon sx={{ fontSize: (theme) => theme.spacing(3.2) }} />
        <Box
          sx={{
            display: "flex",
            // flexDirection: "row",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconTrello />
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Trello
          </Typography>
          <Box sx={{ display: { xs: 'none', md:'flex', gap:1 }}}>
            <Workspaces />
            <Recent />
            <Starred />
            <Templates />

            <Button
              variant="contained"
              size="medium"
              sx={{ backgroundColor: "#579dff" }}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Box>

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
        <TextField
          id="outlined-search"
          label="Search..."
          type="search"
          size="small"
          sx={{
            minWidth: '120px'
          }}
        />

        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="HelpOutline">
          <HelpOutlineIcon sx={{ cursor: "pointer" }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  );
}
export default AppBar;
