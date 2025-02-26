import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import { useColorScheme } from '@mui/material/styles'

function ModeSelect() {

  

    const { mode, setMode } = useColorScheme();
    const handleChange = (event: SelectChangeEvent<"light" | "dark" | "system">) => {
      const selectedMode = event.target.value as 'light' | 'dark' | 'system'
      setMode(selectedMode);
    };
  
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="lable-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="lable-select-dark-light-mode"
          id="select-dark-light-mode"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
  
          <MenuItem value="light">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <LightModeIcon fontSize='small' />Light</div></MenuItem>
          <MenuItem value="dark">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}> <DarkModeOutlinedIcon fontSize='small' />Dark</div></MenuItem>
          <MenuItem value="system"><div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><SettingsBrightnessIcon fontSize='small' />System</div></MenuItem>
        </Select>
      </FormControl>
    );
  }

export default ModeSelect